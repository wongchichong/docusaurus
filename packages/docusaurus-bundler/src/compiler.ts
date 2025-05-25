/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package is deprecated and functionality has been removed. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export function formatStatsErrorMessage() { 
  warnDeprecated(); 
  return 'Webpack stats formatting is deprecated as @docusaurus/bundler is deprecated.'; 
}

export function printStatsWarnings() { 
  warnDeprecated(); 
}

export async function compile() { 
  warnDeprecated(); 
  return Promise.resolve({ toJson: () => ({ errors: [new Error(deprecatedMessage)], warnings: [] }), hasErrors: () => true, hasWarnings: () => false, close: (cb: any) => cb() } as any); 
}
