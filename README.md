# QA Playground - Playwright Automation Practice

Projekt do nauki automatyzacji testów z wykorzystaniem [QA Playground](https://qaplayground.com).

## 📁 Struktura projektu

```
tests/
├── forms/              # Formularze i pola wejściowe
│   └── inputs.spec.ts
├── alerts-windows/     # Alerty i okna dialogowe
│   └── alerts.spec.ts
├── tables/             # Tabele i dane
│   └── tables.spec.ts
├── interactions/       # Interakcje: drag-drop, waity
│   └── drag-drop.spec.ts
├── advanced/           # Zaawansowane: iframes, shadow DOM
│   ├── iframes.spec.ts
│   └── shadow-dom.spec.ts
└── bank-app/           # Bank Demo App - testy E2E
    ├── login.spec.ts
    └── e2e.spec.ts
```

## 🎯 Dostępne ćwiczenia na QA Playground

### 📝 Practice Elements (22+ elementów)
Główna strona do ćwiczeń: https://qaplayground.com/practice

#### Formularze i Inputy
- **Input Fields**: https://qaplayground.com/practice/input-fields
- **Forms**: https://qaplayground.com/practice/input

#### Alerty i Okna
- **Alerts**: https://qaplayground.com/practice/alert
- **Windows & Tabs**: obsługa nowych okien i zakładek

#### Tabele
- **Simple Table**: https://qaplayground.com/practice/simple-table
- **Dynamic Table**: sortowanie, filtrowanie

#### Interakcje
- **Dynamic Elements**: https://qaplayground.com/practice/elements
- **Drag and Drop**: przeciąganie elementów
- **Waits**: dynamiczne ładowanie, oczekiwanie na elementy

#### Zaawansowane
- **iFrames**: praca z iframe
- **Shadow DOM**: lokalizowanie elementów w Shadow DOM
- **File Upload**: upload plików
- **Hover**: akcje na hover

### 🏦 Bank Demo App
Kompletna aplikacja bankowa do testów E2E: https://qaplayground.com/bank

Funkcjonalności:
- Logowanie i zarządzanie sesją
- Dashboard z przeglądem kont
- Zarządzanie transakcjami
- Historia operacji

## 🚀 Jak uruchomić testy

### Wszystkie testy
```bash
npx playwright test
```

### Konkretna kategoria
```bash
npx playwright test tests/forms/
npx playwright test tests/bank-app/
```

### Konkretny plik
```bash
npx playwright test tests/forms/inputs.spec.ts
```

### Z UI Mode (interaktywny tryb)
```bash
npx playwright test --ui
```

### Z raportem
```bash
npx playwright test
npx playwright show-report
```

## 📚 Przydatne zasoby

- [Playwright Documentation](https://playwright.dev)
- [QA Playground](https://qaplayground.com)
- [QA Playground YouTube](https://www.youtube.com/@qaplayground)
- [Example Framework](https://github.com/kundalik5545/QA_PlayGround_Automation_Framework)

## 💡 Wskazówki do nauki

1. **Zacznij od prostych elementów** (inputs, buttons)
2. **Postępuj stopniowo** do bardziej złożonych (tables, iframes)
3. **Użyj Playwright Inspector** do debugowania:
   ```bash
   npx playwright test --debug
   ```
4. **Generuj kod automatycznie** z Codegen:
   ```bash
   npx playwright codegen https://qaplayground.com/practice
   ```
5. **Praktykuj Page Object Model** w folderze bank-app

## 📋 Notatki

- BaseURL jest już skonfigurowany w `playwright.config.ts` na `https://qaplayground.com`
- Możesz używać relatywnych ścieżek: `await page.goto('/practice')`
- Testy są skonfigurowane dla Chrome, Firefox i Safari
- Reporter HTML generuje raport po każdym uruchomieniu

---

**Powodzenia w nauce automatyzacji! 🎓**
