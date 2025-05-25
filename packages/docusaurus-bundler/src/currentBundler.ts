/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// THIS ENTIRE FILE IS PART OF A DEPRECATED PACKAGE. DO NOT USE.
// Project is moving to Vite.

const deprecatedMessage = 'The @docusaurus/bundler package (and its bundler utils) is deprecated. Project is moving to Vite.';
const warnDeprecated = () => console.warn(deprecatedMessage);

export async function getCurrentBundler() { 
  warnDeprecated(); 
  // Return a mock bundler object that does nothing or indicates deprecation
  return { 
    name: 'deprecated-bundler', 
    instance: (() => { 
      warnDeprecated(); 
      // Simulate a very basic Webpack/Rspack-like instance structure
      return { 
        // Provide a mock for any properties/methods that might be accessed
        // For example, if other parts of Docusaurus try to access specific plugins
        // from the bundler instance (like CssExtractRspackPlugin).
        // This is a minimal mock; more might be needed if errors arise.
        CssExtractRspackPlugin: { loader: 'null-loader' }, 
        CopyRspackPlugin: class DeprecatedCopyPlugin { apply() { warnDeprecated(); } },
        ProgressPlugin: class DeprecatedProgressPlugin { apply() { warnDeprecated(); } },
        experiments: { globalTrace: { register: async () => {}, cleanup: async () => {} } },
        // Mock the constructor call itself for `compiler = currentBundler.instance(configs);`
        // This function will be what `currentBundler.instance` resolves to.
        // It needs to return an object with `run` and `close` methods.
        Gefahr: () => { // Using a unique name to avoid conflicts if `instance` was a class
          warnDeprecated();
          return {
            run: (cb: any) => cb(null, { toJson: () => ({ errors: [], warnings: [] }), hasErrors: () => false, hasWarnings: () => false, close: (closeCb: any) => closeCb() }),
            close: (cb: any) => cb()
          } as any; 
        }
      } as any; 
    }) as any
  }; 
}

export function getCurrentBundlerAsRspack() {
  warnDeprecated();
  throw new Error(deprecatedMessage); // This function implies using Rspack, which is part of the deprecated bundler.
}

export async function getCSSExtractPlugin() { 
  warnDeprecated(); 
  return { loader: 'null-loader' } as any; 
}

export async function getCopyPlugin() { 
  warnDeprecated(); 
  return class DeprecatedCopyPlugin { apply() { warnDeprecated(); } } as any; 
}

export async function getProgressBarPlugin() { 
  warnDeprecated(); 
  return class DeprecatedProgressBarPlugin { apply() { warnDeprecated(); } } as any; 
}

export async function registerBundlerTracing() { 
  warnDeprecated(); 
  return async () => { warnDeprecated(); }; 
}
