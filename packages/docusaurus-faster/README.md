# `@docusaurus/faster` (Woby Adapted)

Docusaurus experimental package exposing new modern dependencies (SWC, Rspack, LightningCSS) to make the build faster, now adapted for a Woby.js based Docusaurus system.

This package provides:
- Configuration utilities for `swc-loader`, including JSX transformation options configured for Woby.js (`runtime: 'automatic', importSource: 'woby'`).
- Exports for `rspack`, `swcHtmlMinifier`, `swcJsMinimizerOptions`, and `lightningCssMinimizerOptions` to integrate these tools into a Webpack/Rspack build process.

The goal is to offer faster alternatives for JavaScript/TypeScript transpilation, and CSS/HTML/JS minification. While these tools can be part of a Webpack/Rspack setup for a Woby application, a full migration of Docusaurus's build system (e.g., to Vite) would be a separate, larger undertaking.
