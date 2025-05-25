/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package (and its minification utils) is deprecated. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export async function getMinimizers() { 
  warnDeprecated(); 
  return []; // Return empty array as minimizers are no longer configured here
}
