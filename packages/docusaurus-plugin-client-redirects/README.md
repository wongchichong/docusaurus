# `@docusaurus/plugin-client-redirects` (Woby Compatible)

Client-side redirects plugin for Docusaurus, compatible with Woby.js based sites.

This plugin generates HTML pages that perform client-side redirects using plain JavaScript (via `<meta http-equiv="refresh">` and `window.location.href`). The generated redirect pages are framework-agnostic and do not depend on React or Woby.

## Usage

See [plugin-client-redirects documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js, as the redirect mechanism is self-contained and framework-independent.
