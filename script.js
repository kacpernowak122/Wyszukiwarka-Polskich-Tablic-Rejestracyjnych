let baza = {};

// Wczytanie JSON
fetch("list.json")
    .then(response => response.json())
    .then(data => {
        baza = data;
    })
    .catch(err => {
        console.error("Błąd wczytywania JSON:", err);
    });

function szukaj() {
    const kod = document.getElementById("rejestracja").value.toUpperCase();
    const wynik = document.getElementById("wynik");

    if (kod.length < 2) {
        wynik.textContent = "Wpisz przynajmniej 2 litery.";
        return;
    }

    let pasujace = [];

    /* ===== STANDARDOWE ===== */
    if (baza?.PL?.standard) {
        const standard = baza.PL.standard;

        for (let litera in standard) {
            const codes = standard[litera].codes;
            for (let key in codes) {
                if (key.startsWith(kod)) {
                    pasujace.push(
                        `🟢 ${key}: ${codes[key]} (${standard[litera].województwo})`
                    );
                }
            }
        }
    }

    /* ===== SPECJALNE ===== */
    if (baza?.special) {
        const special = baza.special;

        for (let typ in special) {
            const entry = special[typ];
            if (!entry.codes) continue;

            for (let key in entry.codes) {
                if (key.startsWith(kod)) {
                    pasujace.push(
                        `🔵 ${key}: ${entry.codes[key]} [${entry.description}]`
                    );
                }
            }
        }
    }

    if (pasujace.length === 0) {
        wynik.textContent = "Nie znaleziono wpisu w bazie danych.";
    } else {
        wynik.innerHTML = pasujace.join("<br>");
    }
}
