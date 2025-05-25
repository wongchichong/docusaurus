# `@docusaurus/module-type-aliases` (Woby Adapted)

Docusaurus module type aliases, adapted for a Woby.js based Docusaurus system.

**Note:** As part of a migration/conversion process towards the Woby framework, the type definitions in `src/index.d.ts` have been modified:
- References to React-specific types (like `ReactNode`, `ComponentType` from `react`) have been replaced with Woby-centric equivalents (e.g., `JSX.Element` from Woby's JSX namespace).
- Imports from React-specific libraries (e.g., `react-router-dom`, `react-helmet-async`, `react-loadable`) have been removed or generics have been used.
- The declarations now assume a Woby rendering environment and align with the Woby-adapted `@docusaurus/types` package.
