# `@docusaurus/bundler` (DEPRECATED)

**This package is deprecated and its functionality has been removed. Docusaurus is moving towards Vite for its bundling and development server needs.**

This package originally provided an abstraction layer for the Webpack (and experimental Rspack) bundler used in Docusaurus. It included utilities for creating Webpack configurations, loaders, plugins, and handling compilation.

## Current Status

All bundling logic has been removed from this package. Its exports now primarily consist of no-op functions and deprecation warnings. It is kept in the repository temporarily to avoid immediate build failures in packages that might still import from it, but it should not be used for any bundling purposes.

The Docusaurus project is transitioning to Vite, which will handle development server and production build bundling directly.
