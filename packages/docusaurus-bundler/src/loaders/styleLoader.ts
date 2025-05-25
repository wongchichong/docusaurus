/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package (and its styleLoader) is deprecated. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export async function createStyleLoadersFactory() { 
  warnDeprecated(); 
  // Return a factory that returns a no-op loader config array
  return async () => {
    warnDeprecated();
    return [{ loader: 'null-loader', options: {} }];
  };
}
