# `@docusaurus/plugin-google-tag-manager` (Woby Compatible)

Google Tag Manager (gtm.js) plugin for Docusaurus, compatible with Woby.js based sites.

This plugin injects the Google Tag Manager script into your site. It does not include any client-side JavaScript modules that interact with the rendering framework's lifecycle for route changes, as GTM typically handles this internally based on history changes or its own configuration.

## Usage

See [plugin-google-tag-manager documentation](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-tag-manager).

**Note for Woby.js Users:** This plugin has been updated to remove direct React peer dependencies. It should function correctly in a Docusaurus environment adapted for Woby.js by injecting the necessary GTM scripts.
