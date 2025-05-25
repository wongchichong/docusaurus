/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-nocheck
// React-specific rule (related to Docusaurus <Translate> component and i18n system), disabled for Woby conversion.

/*
import {isTextLabelChild, createRule} from '../util';
import type {TSESTree} from '@typescript-eslint/types/dist/ts-estree';

type Options = [
  {
    ignoredStrings: string[];
  },
];
type MessageIds = 'translateChildren';

export default createRule<Options, MessageIds>({
  name: 'no-untranslated-text',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'enforce text labels in JSX to be wrapped by translate calls',
      recommended: false,
    },
    schema: [
      {
        type: 'object',
        properties: {
          ignoredStrings: {
            type: 'array',
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      translateChildren:
        'All text labels in JSX should be wrapped by translate calls',
    },
  },
  defaultOptions: [
    {
      ignoredStrings: [],
    },
  ],

  create(context, [options]) {
    const {ignoredStrings} = options;
    return {
      JSXElement(node) {
        if (
          node.openingElement.selfClosing ||
          (node.openingElement.name as TSESTree.JSXIdentifier).name ===
            'Translate'
        ) {
          return;
        }
        if (
          node.children.some((child) =>
            isTextLabelChild(child, {ignoredStrings}),
          )
        ) {
          context.report({node, messageId: 'translateChildren'});
        }
      },
      JSXFragment(node) {
        if (
          node.children.some((child) =>
            isTextLabelChild(child, {ignoredStrings}),
          )
        ) {
          context.report({node, messageId: 'translateChildren'});
        }
      },
    };
  },
});
*/

export default {
  name: 'no-untranslated-text',
  meta: {
    type: 'suggestion',
    docs: {
      description:
        '[DEPRECATED] enforce text labels in JSX to be wrapped by translate calls',
      recommended: false,
    },
    messages: {
      translateChildren:
        '[DEPRECATED] All text labels in JSX should be wrapped by translate calls',
    },
  },
  create: () => ({}), // No-op
};
