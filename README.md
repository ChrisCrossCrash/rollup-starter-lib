# Rollup Starter Library

A simple starter library for creating TypeScript-based libraries using Rollup.

## Features

- TypeScript support
- Generates CommonJS and ES Module builds
- Source maps for easier debugging
- Bundled using Rollup

## Installation

To use this starter library as a base for your project, you can simply clone the repository and start modifying the code.

```bash
git clone https://github.com/user/rollup-starter-lib.git
cd rollup-starter-lib
npm install
```

Replace https://github.com/user/rollup-starter-lib.git with the actual URL of your repository.

## Usage

Modify the src/main.ts file to add your library code, then build your library using the `build` script:

```bash
npm build
```

This will generate CommonJS and ES Module builds in the dist folder.

### Using `npm link` for Local Development

**1. Rename Your Library**: Change the name in your `package.json` from `rollup-starter-lib` to your chosen library name.

**2. Link Your Library**: Run `npm link` in your library's root folder. This makes the library available to be linked in other projects on the same machine.

**3. Use in Another Project**: In the directory of another project, run `npm link <your-library-name>`. This links your local library to the project, allowing you to test it as if it were installed to that project.

**4. Unlink When Done**: To unlink the library, run `npm uninstall <your-library-name>` in the project where it's linked, and then `npm --global uninstall <your-library-name>` to remove the global link that was created with `npm link`.

For further information, see the [official `npm link` documentation](https://docs.npmjs.com/cli/v10/commands/npm-link).

## License

This project is licensed under the [MIT License](./LICENSE).
