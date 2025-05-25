/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import rules from './rules';

// @ts-expect-error: TODO try to remove later
export = {
  rules, // This is now an empty object
  configs: {
    recommended: {
      plugins: ['@docusaurus'],
      rules: {
        // '@docusaurus/string-literal-i18n-messages': 'error', // Disabled
        // '@docusaurus/no-html-links': 'warn', // Disabled
        // '@docusaurus/prefer-docusaurus-heading': 'warn', // Disabled
      },
    },
    all: {
      plugins: ['@docusaurus'],
      rules: {
        // '@docusaurus/string-literal-i18n-messages': 'error', // Disabled
        // '@docusaurus/no-untranslated-text': 'warn', // Disabled
        // '@docusaurus/no-html-links': 'warn', // Disabled
        // '@docusaurus/prefer-docusaurus-heading': 'warn', // Disabled
      },
    },
  },
};
