# Sprawdzanie Miast po Rejestracjach

Prosty projekt w HTML/JS, który pozwala sprawdzić miasto lub powiat po **polskich tablicach rejestracyjnych**.

---

## Funkcje

- Wczytywanie bazy rejestracji z pliku JSON (`list.json`)
- Wyszukiwanie miasta/powiatu po pierwszych 2–3 literach rejestracji
- Obsługa duplikatów – jeśli w bazie są powtarzające się kody, wyświetla wszystkie pasujące miasta

---

## Jak pobrać

1. Sklonuj repozytorium:

```bash
git clone https://github.com/kacpernowak122/Wyszukiwarka-Polskich-Tablic-Rejestracyjnych.git
```

## Jak używać w internecie

Wejdź na stronę ```https://kacpernowak122.github.io/Wyszukiwarka-Polskich-Tablic-Rejestracyjnych/``` i korzystaj!

## Jak używać lokalnie

Jeśli posiadasz python, wpisz ```python -m http.server``` i wejdź na http://localhost:8000 w twojej przeglądarce,
jeśli masz Node.js, wtedy ```npx serve .``` http://localhost:5000 lub twoje IP.

A jeśli posiadasz obydwa, wybór należy do ciebie :D

