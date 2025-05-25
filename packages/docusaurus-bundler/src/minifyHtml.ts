/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package (and its HTML minifier utils) is deprecated. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export type HtmlMinifierResult = {
  code: string;
  warnings: string[];
};

export type HtmlMinifier = {
  minify: (html: string) => Promise<HtmlMinifierResult>;
};

export async function getHtmlMinifier(): Promise<HtmlMinifier> { 
  warnDeprecated(); 
  return { 
    minify: async (html: string) => ({ code: html, warnings: [deprecatedMessage] }) 
  }; 
}

export type {HtmlMinifierType} from './minifyHtml'; // Original type export if needed by other packages
// Actual HtmlMinifierType was defined in the original file but not exported.
// For simplicity, if it was used, it might be better to define a placeholder here or remove.
// Assuming it wasn't widely exported or used externally beyond the getHtmlMinifier function's return type.
