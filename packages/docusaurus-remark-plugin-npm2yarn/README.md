# `@docusaurus/remark-plugin-npm2yarn` (DEPRECATED)

**This Remark plugin is deprecated and its functionality has been removed.**

It was originally designed to transform `npm` command examples in Markdown code blocks into interactive tabs showing equivalents for `yarn`, `pnpm`, and `bun`. This was achieved using the `npm-to-yarn` library and Docusaurus-specific Tab components.

## Current Status

As part of a migration towards a Woby.js-based system and to simplify the Markdown processing pipeline, the core `npm-to-yarn` conversion logic and the automatic generation of Docusaurus Tabs have been removed from this plugin. The plugin is now a no-op and does not transform code blocks.

## Recommendation

If you need to display command examples for multiple package managers (npm, pnpm, yarn, bun), you should now manually write these out using appropriate Markdown structures, such as Docusaurus Tabs if your theme supports them (or an equivalent Woby component if applicable).

Example of manual tabs for commands:

````md
```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="package-managers">
  <TabItem value="npm" label="npm">
  ```bash
  npm install my-package
  npm run start
  ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm" default>
  ```bash
  pnpm add my-package
  pnpm start
  ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
  ```bash
  yarn add my-package
  yarn start
  ```
  </TabItem>
  <TabItem value="bun" label="Bun">
  ```bash
  bun add my-package
  bun run start
  ```
  </TabItem>
</Tabs>
```
````

This approach provides explicit control over the displayed commands.
