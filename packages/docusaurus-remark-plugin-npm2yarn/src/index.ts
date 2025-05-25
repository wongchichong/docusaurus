/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This plugin is deprecated for Woby.js conversion.
// It previously converted npm commands to yarn/pnpm/bun equivalents using Tabs.
// The npm-to-yarn functionality and MDX Tab generation have been removed.

import type {Plugin} from 'unified';

type PluginOptions = {
  sync?: boolean;
  // converters?: Converter[]; // Original converters option
};

const plugin: Plugin<[PluginOptions?]> = (_options = {}) => {
  // Return a transformer function that does nothing.
  return async (_tree) => {
    // No operation on the tree.
  };
};

// To continue supporting `require('npm2yarn')` without the `.default` ㄟ(▔,▔)ㄏ
// TODO change to export default after migrating to ESM
// @ts-expect-error: Docusaurus v4: remove
export = plugin;
