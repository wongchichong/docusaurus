# `@docusaurus/plugin-svgr` (Woby Adapted)

[SVGR](https://react-svgr.com/) plugin for Docusaurus, now configured to transform SVGs into Woby.js compatible components.

This plugin integrates SVGR into Docusaurus's Webpack build process, allowing you to import SVG files directly as Woby components in your `.js`, `.jsx`, `.ts`, `.tsx`, and `.mdx` files.

## Usage

See [plugin-svgr documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-svgr).

**Note for Woby.js Users:** This plugin has been updated to configure SVGR to output JSX compatible with Woby's runtime (using `jsxRuntime: 'automatic'` and `jsxImportSource: 'woby'`). The `react` and `react-dom` peer dependencies have been removed and replaced with `woby`.
