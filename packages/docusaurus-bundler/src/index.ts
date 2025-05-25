/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE PACKAGE IS DEPRECATED. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package is deprecated and functionality has been removed. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export function printStatsWarnings() { warnDeprecated(); }
export function formatStatsErrorMessage() { warnDeprecated(); return undefined; }
export async function compile() { 
  warnDeprecated(); 
  // Simulate a webpack.MultiStats object structure if absolutely necessary,
  // but for deprecation, returning a simpler promise that resolves to an
  // object indicating failure or empty stats might be better.
  // For now, returning a promise that resolves to an empty stats-like object.
  return Promise.resolve({ toJson: () => ({ errors: [], warnings: [] }), hasErrors: () => false, hasWarnings: () => false } as any); 
}

export function getCurrentBundler() { 
  warnDeprecated(); 
  return { 
    name: 'deprecated-bundler', 
    instance: (() => { 
      warnDeprecated(); 
      return { run: (cb: any) => cb(null, { toJson: () => ({ errors: [], warnings: [] }), hasErrors: () => false, hasWarnings: () => false, close: (closeCb: any) => closeCb() }), close: (cb: any) => cb() } as any; 
    }) as any 
  }; 
}
export async function getCSSExtractPlugin() { warnDeprecated(); return { loader: 'null-loader' } as any; }
export async function getCopyPlugin() { warnDeprecated(); return class DeprecatedCopyPlugin { apply() { warnDeprecated(); } } as any; }
export async function getProgressBarPlugin() { warnDeprecated(); return class DeprecatedProgressBarPlugin { apply() { warnDeprecated(); } } as any; }
export async function registerBundlerTracing() { warnDeprecated(); return async () => {}; }


export async function getMinimizers() { warnDeprecated(); return []; }
export async function getHtmlMinifier() { 
  warnDeprecated(); 
  return { 
    minify: async (html: string) => ({ code: html, warnings: [deprecatedMessage] }) 
  }; 
}
export async function createJsLoaderFactory() { 
  warnDeprecated(); 
  // Return a factory that returns a no-op loader config
  return async () => ({ loader: 'null-loader' }); 
}
export async function createStyleLoadersFactory() { 
  warnDeprecated(); 
  // Return a factory that returns a no-op loader config array
  return async () => [{ loader: 'null-loader' }]; 
}

// Re-export types if they are still used externally, but implementations are gone.
// These types might be imported by other packages.
export type { HtmlMinifier, HtmlMinifierType } from './minifyHtml'; // Assuming types might still be referenced
// Add other type re-exports if necessary from other files that will be neutered.
