# `@docusaurus/cssnano-preset` (DEPRECATED)

**This package is deprecated and no longer recommended for use, especially in projects utilizing Tailwind CSS.**

This package was originally designed to provide an advanced `cssnano` preset for PostCSS-based CSS optimization within the Docusaurus classic preset. Its purpose was to minimize CSS output effectively.

## Current Status

With the shift towards modern CSS frameworks like Tailwind CSS, which has its own built-in optimization (purging unused styles) and different methodologies for CSS handling, this preset is not suitable or necessary.

**If you are using Tailwind CSS, you should configure Tailwind CSS directly for your styling and optimization needs.** This package is not intended for use in a Woby/Tailwind CSS based environment or similar modern setups.

For historical reference, this preset included plugins like `postcss-sort-media-queries` and custom logic for removing overridden custom properties. However, these are specific to traditional PostCSS pipelines and not relevant for Tailwind CSS.
