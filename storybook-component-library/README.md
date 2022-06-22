# storybook-component-library

## CLI Commands
*   `npm install`: Installs dependencies

*   `npm run dev`: Run a development, HMR server

*   `npm run serve`: Run a production-like server

*   `npm run build`: Production-ready build

*   `npm run lint`: Pass TypeScript files using ESLint

*   `npx storybook init`: Add storybook to your project

*   `npm run storybook`: Open storybook in a development environment

*   `npm run build, npm pack`: Build component library package using **rollup**. After package is created, copy the newly created tgz file to your project, and npm install {name}.tgz. Now you can use the library and import respective components.

*   `npm run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests


Note: All the components need to be exported via src/index.ts file in order to be imported and used in your project.

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
