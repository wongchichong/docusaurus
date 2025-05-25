/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package (and its faster import utils) is deprecated. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

// Return minimal mocks or throw errors to indicate deprecation.
// These functions were originally async and imported from '@docusaurus/faster'.
// Since '@docusaurus/faster' itself has been Woby-adapted but this bundler is deprecated,
// these shims should indicate that this pathway is no longer valid.

export async function importRspack() {
  warnDeprecated();
  throw new Error(deprecatedMessage); 
}

export async function importSwcLoader() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export async function importGetSwcLoaderOptions() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export async function importSwcJsMinimizerOptions() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export async function importSwcHtmlMinifier() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export async function importGetBrowserslistQueries() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export async function importLightningCssMinimizerOptions() {
  warnDeprecated();
  throw new Error(deprecatedMessage);
}

export type { FasterModule } from '@docusaurus/faster'; // Type re-export might still be needed by consumers
// However, since the functions that use FasterModule are removed/deprecated, this type's utility here is minimal.
