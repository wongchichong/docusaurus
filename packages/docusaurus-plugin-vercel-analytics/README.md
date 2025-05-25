# `@docusaurus/plugin-vercel-analytics` (Woby Compatible)

[Vercel Analytics](https://vercel.com/docs/analytics) plugin for Docusaurus, compatible with Woby.js based sites.

This plugin integrates Vercel Analytics into your site by calling its `inject()` function from a client module. The client module itself is framework-agnostic and relies on Docusaurus's client lifecycle and global data systems.

## Usage

See [plugin-vercel-analytics documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-vercel-analytics).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js, assuming the core Docusaurus client systems are available.
