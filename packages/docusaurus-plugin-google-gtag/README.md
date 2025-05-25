# `@docusaurus/plugin-google-gtag` (Woby Compatible)

Google Global Site Tag (gtag.js) plugin for Docusaurus, compatible with Woby.js based sites.

This plugin injects the Google GTag script into your site and uses a client module to send pageview events. The client module is framework-agnostic and integrates with Docusaurus's client lifecycle events.

## Usage

See [plugin-google-gtag documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js, assuming the core Docusaurus client lifecycle events are available.
