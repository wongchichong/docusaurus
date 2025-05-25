# `@docusaurus/plugin-rsdoctor` (Woby Compatible)

[Rsdoctor](https://rsdoctor.dev/) build analysis plugin for Docusaurus, compatible with Woby.js based sites.

This plugin integrates Rsdoctor into the Docusaurus build process (Webpack or Rspack), allowing for in-depth analysis of build performance and bundle composition. It operates at the bundler configuration level and is framework-agnostic in its Docusaurus integration.

## Usage

See [plugin-rsdoctor documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-rsdoctor).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js, provided the underlying bundler (Webpack/Rspack) is used. Rsdoctor's own analysis capabilities depend on the specifics of the build being analyzed.
