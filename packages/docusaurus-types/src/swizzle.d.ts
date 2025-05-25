/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Removed: import type {JSX, JSXElementConstructor} from 'react';
// Assuming JSX and JSXElementConstructor will be resolved from Woby's JSX namespace
// once jsxImportSource is set in tsconfig.

export type SwizzleAction = 'eject' | 'wrap';
export type SwizzleActionStatus = 'safe' | 'unsafe' | 'forbidden';

export type SwizzleComponentConfig = {
  actions: {[action in SwizzleAction]: SwizzleActionStatus};
  description?: string;
};

export type SwizzleConfig = {
  components: {[componentName: string]: SwizzleComponentConfig};
  // Other settings could be added here, like the ability to declare the config
  // as exhaustive so that we can emit errors
};

/**
 * This type is almost the same as `React.ComponentProps`, but with one minor
 * fix: when the component is a function with no parameters, it produces `{}`
 * instead of `unknown`, allowing us to spread the props derived from another
 * component. This is useful for wrap swizzling.
 *
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60766
 */
export type WrapperProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = T extends JSXElementConstructor<infer P>
  ? unknown extends P
    ? // eslint-disable-next-line @typescript-eslint/ban-types
      {} // Keep this for components with no props
    : P
  : T extends keyof JSX.IntrinsicElements // This JSX should refer to Woby's JSX
  ? JSX.IntrinsicElements[T]
  : // eslint-disable-next-line @typescript-eslint/ban-types
    {};
