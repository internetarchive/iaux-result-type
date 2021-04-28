[![Build Status](https://github.com/internetarchive/iaux-result-type/actions/workflows/ci.yml/badge.svg?branch=main)) [![codecov](https://codecov.io/gh/internetarchive/iaux-result-type/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-result-type)

# IAUX Result Type

A generic Result interface for returning type-safe responses and errors.

## Installation

```
> yarn add @internetarchive/result-type
```

## Usage

### `Result`

`Result` is a generic interface for returning a response with typesafe value and error handling.

```js
import { Result } from '@internetarchive/result-type';

enum FooErrorType {
  networkError,
  decodingError,
}

class FooError extends Error {
  type?: FooErrorType;

  constructor(type: FooErrorType, message: string?) {
    super(message);
    this.type = type;
  }
}

// success
const result: Result<string, FooError> = { success: 'foo' };

const value = result.success;
if (value) {
  console.debug('do something with `value`');
}

// error
const result: Result<string, FooError> = {
  error: new FooError(FooErrorType.decodingError),
};

if (result.error) {
  switch (result.error) {
    case FooErrorType.networkError:
      console.debug('handle network error');
      break;
    case FooErrorType.decodingError:
      console.debug('handle decoding error');
      break;
    default:
      console.debug('unknown error');
  }
}
```

## Local Demo with `web-dev-server`
```bash
yarn start
```
To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
yarn run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
yarn run test:watch
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
yarn run lint
```

You can lint with ESLint and Prettier individually as well
```bash
yarn run lint:eslint
```
```bash
yarn run lint:prettier
```

To automatically fix many linting errors, run
```bash
yarn run format
```

You can format using ESLint and Prettier individually as well
```bash
yarn run format:eslint
```
```bash
yarn run format:prettier
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.
