# js-ext

> A collection of useful JavaScript functions

instead of having to create helper functions for every project, I decided to create a library of useful functions that I can use in any project.
bard recommended i use lodash or a similar library, but i wanted to create my own library for fun. and utilize javascript's prototype system to avoid having to import functions from a library.

## Install

```bash
bun i @mohamedbechirmejri/js-ext
```

## Features

## Typescript support

add the following to your tsconfig.json file

```json
{
  "compilerOptions": {
    "types": ["./node_modules/@mohamedbechirmejri/js-ext/.build/index.d.ts"]
  }
}
```

## Usage

```js
// main.js

import init from "@mohamedbechirmejri/js-ext";

init();
```

you can supply a config object to the init function to turnoff some functions

```js
init({ ignore: ["CAPITALIZE"] });
```

```js
"test".CAPITALIZE(); // Test
```

## Functions

> you can use your IDE's intellisense to see all the functions

> the library also includes JSDOC comments for all the functions

### String

```js
"test".CAPITALIZE(); // Test
"test".REVERSE(); // tset
```
