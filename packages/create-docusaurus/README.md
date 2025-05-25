# `create-docusaurus` (Woby Adapted)

Create Docusaurus apps easily with simplified commands, now generating Woby.js based project templates:

```bash
npm init docusaurus my-woby-app
```

```bash
yarn create docusaurus my-woby-app
```

```bash
npx create-docusaurus@latest my-woby-app
```

## Usage

Please see the [installation documentation](https://docusaurus.io/docs/installation) (Note: Link points to original Docusaurus docs; Woby-specific documentation would be needed).

The generated templates provide a basic Woby.js application structure. Docusaurus core functionalities (like plugins, themes, routing beyond basic file-based) would need to be re-implemented or adapted for Woby.

## For maintainers

For Docusaurus/Woby maintainers, templates can be tested with:

```bash
cd `git rev-parse --show-toplevel` # Back to repo root
rm -rf test-woby-website
yarn create-docusaurus test-woby-website classic --javascript # or --typescript
cd test-woby-website
# Add Woby-specific build/start commands here
# e.g., yarn start (if template package.json is updated)
```

Note: `test-woby-website` is not part of the workspace and use packages from npm by default.
The template's `package.json` has been updated to include `woby` and placeholder scripts.
