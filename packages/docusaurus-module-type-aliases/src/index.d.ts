/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

declare module '@generated/client-modules' {
  import type {ClientModule} from '@docusaurus/types';

  const clientModules: readonly (ClientModule & {default?: ClientModule})[];
  export default clientModules;
}

declare module '@generated/docusaurus.config' {
  import type {DocusaurusConfig} from '@docusaurus/types';

  const config: DocusaurusConfig;
  export default config;
}

declare module '@generated/site-metadata' {
  import type {SiteMetadata} from '@docusaurus/types';

  const siteMetadata: SiteMetadata;
  export = siteMetadata;
}

declare module '@generated/site-storage' {
  import type {SiteStorage} from '@docusaurus/types';

  const siteStorage: SiteStorage;
  export = siteStorage;
}

declare module '@generated/registry' {
  import type {Registry} from '@docusaurus/types';

  const registry: Registry;
  export default registry;
}

declare module '@generated/routes' {
  // import type {RouteConfig as RRRouteConfig} from 'react-router-config'; // Woby: React-router specific
  // import type Loadable from 'react-loadable'; // Woby: React-loadable specific

  // Woby: Simplified route config, actual component type depends on Woby's lazy loading
  type RouteConfig = /* RRRouteConfig */ any & {
    path: string;
    component: any; // ReturnType<typeof Loadable>;
  };
  const routes: RouteConfig[];
  export default routes;
}

declare module '@generated/routesChunkNames' {
  import type {RouteChunkNames} from '@docusaurus/types';

  const routesChunkNames: RouteChunkNames;
  export = routesChunkNames;
}

declare module '@generated/globalData' {
  import type {GlobalData} from '@docusaurus/types';

  const globalData: GlobalData;
  export = globalData;
}

declare module '@generated/i18n' {
  import type {I18n} from '@docusaurus/types';

  const i18n: I18n;
  export = i18n;
}

declare module '@generated/codeTranslations' {
  import type {CodeTranslations} from '@docusaurus/types';

  const codeTranslations: CodeTranslations;
  export = codeTranslations;
}

declare module '@theme-original/*';
declare module '@theme-init/*';

declare module '@theme/Error' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element
  import type {FallbackParams} from '@docusaurus/ErrorBoundary';

  export interface Props extends FallbackParams {}
  export default function Error(props: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/Layout' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export interface Props {
    readonly children?: JSX.Element; // Woby: JSX.Element
  }
  export default function Layout(props: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/Loading' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element
  // import type {LoadingComponentProps} from 'react-loadable'; // Woby: React-loadable specific

  export default function Loading(props: any /* LoadingComponentProps */): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/NotFound' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export default function NotFound(): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/Root' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export interface Props {
    readonly children: JSX.Element; // Woby: JSX.Element
  }
  export default function Root({children}: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/ThemeProvider' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export interface Props {
    readonly children: JSX.Element; // Woby: JSX.Element
  }
  export default function ThemeProvider({children}: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@theme/SiteMetadata' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export default function SiteMetadata(): JSX.Element; // Woby: JSX.Element
}

declare module '@docusaurus/constants' {
  export const DEFAULT_PLUGIN_ID: 'default';
}

declare module '@docusaurus/ErrorBoundary' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export type FallbackParams = {
    readonly error: Error;
    readonly tryAgain: () => void;
  };

  export type FallbackFunction = (params: FallbackParams) => JSX.Element; // Woby: JSX.Element

  export interface Props {
    readonly fallback?: FallbackFunction;
    readonly children: JSX.Element; // Woby: JSX.Element
  }
  export default function ErrorBoundary(props: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@docusaurus/Head' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element
  // import type {HelmetProps} from 'react-helmet-async'; // Woby: react-helmet-async specific

  export type Props = /* HelmetProps */ any & {children: JSX.Element}; // Woby: JSX.Element

  export default function Head(props: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@docusaurus/Link' {
  // import type {CSSProperties, ComponentProps, ReactNode} from 'react'; // Woby: use Woby types
  // import type {NavLinkProps as RRNavLinkProps} from 'react-router-dom'; // Woby: React-router specific

  type NavLinkProps = Partial<any /* RRNavLinkProps */>;
  export type Props = NavLinkProps &
    /* ComponentProps<'a'> */ any & { // Woby: Use Woby's intrinsic element props if available
      readonly className?: string;
      readonly style?: any; // CSSProperties; // Woby: Use Woby's style type
      readonly isNavLink?: boolean;
      readonly to?: string;
      readonly href?: string;
      readonly autoAddBaseUrl?: boolean;

      /** Escape hatch in case broken links check doesn't make sense. */
      readonly 'data-noBrokenLinkCheck'?: boolean;
    };
  export default function Link(props: Props): JSX.Element; // Woby: JSX.Element
}

declare module '@docusaurus/Interpolate' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export type ExtractInterpolatePlaceholders<Str extends string> =
    Str extends `${string}{${infer Key}}${infer Rest}`
      ? Key | ExtractInterpolatePlaceholders<Rest>
      : never;

  export type InterpolateValues<Str extends string, Value extends JSX.Element | string | number> = { // Woby: JSX.Element
    [key in ExtractInterpolatePlaceholders<Str>]: Value;
  };

  // If all the values are plain strings, interpolate returns a simple string
  export function interpolate<Str extends string>(
    text: Str,
    values?: InterpolateValues<Str, string | number>,
  ): string;

  // If values contain any JSX.Element, the return is a JSX.Element
  export function interpolate<Str extends string, Value extends JSX.Element | string | number>( // Woby: JSX.Element
    text: Str,
    values?: InterpolateValues<Str, Value>,
  ): JSX.Element | string; // Woby: JSX.Element or string

  export type InterpolateProps<Str extends string> = {
    children: Str;
    values?: InterpolateValues<Str, JSX.Element | string | number>; // Woby: JSX.Element
  };

  export default function Interpolate<Str extends string>(
    props: InterpolateProps<Str>,
  ): JSX.Element | string; // Woby: JSX.Element or string
}

declare module '@docusaurus/Translate' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element
  import type {InterpolateValues} from '@docusaurus/Interpolate';

  // TS type to ensure that at least one of id or message is always provided
  // (Generic permits to handled message provided as React children)
  type IdOrMessage<
    MessageKey extends 'children' | 'message',
    Str extends string,
  > =
    | ({[key in MessageKey]: Str} & {id?: string})
    | ({[key in MessageKey]?: Str} & {id: string});

  export type TranslateParam<Str extends string> = IdOrMessage<
    'message',
    Str
  > & {
    description?: string;
  };

  export function translate<Str extends string>(
    param: TranslateParam<Str>,
    values?: InterpolateValues<Str, string | number>,
  ): string;

  export type TranslateProps<Str extends string> = IdOrMessage<
    'children',
    Str
  > & {
    description?: string;
    values?: InterpolateValues<Str, JSX.Element | string | number>; // Woby: JSX.Element
  };

  export default function Translate<Str extends string>(
    props: TranslateProps<Str>,
  ): JSX.Element | string; // Woby: JSX.Element or string
}

declare module '@docusaurus/router' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  // export {useHistory, useLocation, Redirect, matchPath} from 'react-router-dom'; // Woby: React-router specific
  // Woby: Define Woby equivalents or remove if not applicable
  export const useHistory: any;
  export const useLocation: any;
  export const Redirect: any;
  export const matchPath: any;
}

declare module '@docusaurus/useIsomorphicLayoutEffect' {
  // import {useLayoutEffect} from 'react'; // Woby: React specific hook
  // Woby: Provide Woby's equivalent if available, or a generic type
  const useIsomorphicLayoutEffect: any; // typeof useLayoutEffect;
  export = useIsomorphicLayoutEffect;
}

declare module '@docusaurus/useDocusaurusContext' {
  import type {DocusaurusContext} from '@docusaurus/types';

  export default function useDocusaurusContext(): DocusaurusContext;
}

declare module '@docusaurus/useRouteContext' {
  import type {PluginRouteContext} from '@docusaurus/types';

  export default function useRouteContext(): PluginRouteContext;
}

declare module '@docusaurus/useBrokenLinks' {
  export type BrokenLinks = {
    collectLink: (link: string | undefined) => void;
    collectAnchor: (anchor: string | undefined) => void;
  };

  export default function useBrokenLinks(): BrokenLinks;
}

declare module '@docusaurus/useIsBrowser' {
  export default function useIsBrowser(): boolean;
}

declare module '@docusaurus/useBaseUrl' {
  export type BaseUrlOptions = {
    forcePrependBaseUrl?: boolean;
    absolute?: boolean;
  };

  export type BaseUrlUtils = {
    withBaseUrl: (url: string, options?: BaseUrlOptions) => string;
  };

  export function useBaseUrlUtils(): BaseUrlUtils;

  export default function useBaseUrl(
    relativePath: string | undefined,
    opts?: BaseUrlOptions,
  ): string;
}

declare module '@docusaurus/ExecutionEnvironment' {
  const ExecutionEnvironment: {
    canUseDOM: boolean;
    canUseEventListeners: boolean;
    canUseIntersectionObserver: boolean;
    canUseViewport: boolean;
  };
  export default ExecutionEnvironment;
}

declare module '@docusaurus/ComponentCreator' {
  // import type Loadable from 'react-loadable'; // Woby: React-loadable specific

  export default function ComponentCreator(
    path: string,
    hash: string,
  ): any; // ReturnType<typeof Loadable>; // Woby: Use Woby's lazy component type
}

declare module '@docusaurus/BrowserOnly' {
  // import type {ReactNode} from 'react'; // Woby: use JSX.Element

  export interface Props {
    readonly children?: () => JSX.Element; // Woby: JSX.Element
    readonly fallback?: JSX.Element; // Woby: JSX.Element
  }
  export default function BrowserOnly(props: Props): JSX.Element | null; // Woby: JSX.Element
}

declare module '@docusaurus/isInternalUrl' {
  export function hasProtocol(url: string): boolean;
  export default function isInternalUrl(url?: string): boolean;
}

declare module '@docusaurus/Noop' {
  export default function (): null;
}

declare module '@docusaurus/renderRoutes' {
  // eslint-disable-next-line import/no-extraneous-dependencies
  // import {renderRoutes} from 'react-router-config'; // Woby: React-router specific
  const renderRoutes: any; // Woby: Define Woby equivalent or remove
  export default renderRoutes;
}

declare module '@docusaurus/useGlobalData' {
  import type {GlobalData, UseDataOptions} from '@docusaurus/types';

  export function useAllPluginInstancesData(
    pluginName: string,
    options: {failfast: true},
  ): GlobalData[string];

  export function useAllPluginInstancesData(
    pluginName: string,
    options?: UseDataOptions,
  ): GlobalData[string] | undefined;

  export function usePluginData(
    pluginName: string,
    pluginId: string | undefined,
    options: {failfast: true},
  ): NonNullable<GlobalData[string][string]>;

  export function usePluginData(
    pluginName: string,
    pluginId?: string,
    options?: UseDataOptions,
  ): GlobalData[string][string];

  export default function useGlobalData(): GlobalData;
}

// TODO find a way to move this ambient type to the SVGR plugin?
//  unfortunately looks complicated in practice
//  see https://x.com/sebastienlorber/status/1859543512661832053
declare module '*.svg' {
  // import type {ComponentType, SVGProps} from 'react'; // Woby: use Woby types

  // Woby: Define SVG component type, assuming it's a functional component returning JSX.Element
  const SvgComponent: (props: any /* SVGProps<SVGSVGElement> & {title?: string} */) => JSX.Element;

  export default SvgComponent;
}

declare module '*.module.css' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

declare module '*.css' {
  const src: string;
  export default src;
}

declare module '*.md' {
  // import type {ComponentType} from 'react'; // Woby: use Woby types

  // Woby: Define MD component type
  const MdComponent: (props: any) => JSX.Element; //ComponentType<unknown>;

  export default MdComponent;
}

declare module '*.mdx' {
  // import type {ComponentType} from 'react'; // Woby: use Woby types
  
  // Woby: Define MDX component type
  const MdxComponent: (props: any) => JSX.Element; //ComponentType<unknown>;

  export default MdxComponent;
}

interface Window {
  docusaurus: {
    prefetch: (url: string) => false | Promise<void[]>;
    preload: (url: string) => false | Promise<void[]>;
  };
  // docusaurusRoot?: import('react-dom/client').Root; // Woby: React-DOM specific
  docusaurusRoot?: any; // Woby: Define Woby's root type if applicable
}
