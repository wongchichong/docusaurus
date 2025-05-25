# `@docusaurus/babel` (Woby Adapted)

Babel utilities and preset for Docusaurus, adapted for a Woby.js based environment.

This package provides:
- A Babel preset (`@docusaurus/babel/preset`) that is configured to handle modern JavaScript and TypeScript. It uses the "automatic" JSX runtime with `"woby"` as the import source, making it suitable for transpiling JSX in Woby projects (e.g., within MDX files).
- Utilities for loading Babel configurations.
- Functionality for extracting translation messages (though this part may be less relevant for non-Docusaurus i18n systems).

While modern bundlers like Vite handle most transpilation, Babel may still be involved in specific scenarios like MDX processing. This package aims to provide the necessary Babel configurations for such cases in a Woby-centric Docusaurus setup.
