# `@docusaurus/theme-translations` (Woby Compatible)

This package includes default translations for labels (like the pagination "Next" / "Previous") used by official Docusaurus themes. It is compatible with Woby.js based Docusaurus sites.

The package provides:
- JSON translation files for various locales.
- Utility functions to load these translations.
- A script (`update.mjs`) for maintainers to extract and update translatable messages from theme source code. This script now uses a Woby-adapted Babel preset, allowing it to process Woby JSX if present in themes.

## For Docusaurus users:

Please help us provide exhaustive translations:
- Add new translations by running `yarn workspace @docusaurus/theme-translations update %new_lang_code%`, then edit generated JSON files.
- Double-check existent `language.json` file for bad or missing translations.

## For maintainers:

After updating the theme code, you can "synchronize" the translations by running:

```bash
yarn workspace @docusaurus/theme-translations update
```

Then, ask contributors to translate the newly added labels on this [issue](https://github.com/facebook/docusaurus/issues/3526).
