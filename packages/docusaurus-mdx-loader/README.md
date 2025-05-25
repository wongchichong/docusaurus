# `@docusaurus/mdx-loader` (Woby Adapted)

Docusaurus webpack loader for [MDX](https://github.com/mdx-js/mdx), now configured to output Woby.js compatible JSX.

## Installation

```sh
yarn add @docusaurus/mdx-loader
```

## Usage

This loader is typically used within a Webpack configuration for processing `.md` and `.mdx` files.

```javascript
// webpack.config.js example
module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.mdx?$/i,
        use: [
          {
            loader: '@docusaurus/mdx-loader',
            options: {
              // See options below.
              // Key change: The MDX compiler is now configured to use Woby's JSX runtime
              // (jsxRuntime: 'automatic', jsxImportSource: 'woby', providerImportSource: 'woby').
            },
          },
        ],
      },
    ],
  },
};
```

## Options

### `remarkPlugins`
Array of remark plugins to manipulate the MDXAST.

### `rehypePlugins`
Array of rehype plugins to manipulate the MDXHAST.

### `recmaPlugins`
Array of recma plugins.

### `beforeDefaultRemarkPlugins` / `beforeDefaultRehypePlugins`
Allows adding plugins before the default Docusaurus sets.

### `metadataPath`
A function to provide the `metadataPath` depending on current loaded MDX path that will be exported as the MDX metadata.

### `markdownConfig`
The global Docusaurus Markdown config (`config.markdown`), that plugin authors should forward. Example:
```js
const loader = {
  loader: require.resolve('@docusaurus/mdx-loader'),
  options: {
    markdownConfig: siteConfig.markdown, // siteConfig.markdown should also be Woby-aware if needed
  },
};
```

## Woby.js JSX Output
The loader configures the underlying `@mdx-js/mdx` compiler to use Woby's JSX runtime. This means the JavaScript output from this loader will include JSX that expects Woby's `createElement` and `Fragment` (or their equivalents via the automatic runtime configuration). Ensure your build system and Woby setup can correctly handle this JSX.
