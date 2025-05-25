# `@docusaurus/plugin-google-analytics` (Woby Compatible)

Google Analytics (analytics.js) plugin for Docusaurus, compatible with Woby.js based sites.

This plugin injects the Google Analytics script into your site and uses a client module to send pageview events. The client module is framework-agnostic and integrates with Docusaurus's client lifecycle events.

## Usage

See [plugin-google-analytics documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-analytics).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js, assuming the core Docusaurus client lifecycle events are available.
