## What is Safe Ramda?

It’s a nil-safe drop-in replacement for [Ramda](https://ramdajs.com/).

It allows you to program more intuitively – to avoid the noise of nil checks
that are imposed upon you by the machine, not the logic.

| Ramda                                                                                                                                              | Safe Ramda                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `unless(isNil)(replace('foo', 'bar'))`                                                                                                             | `replace('foo', 'bar')`                                                                                        |
| <pre>const getMyCookie = pipe( <br> defaultTo([]), <br> find(startsWith('my-cookie=')), <br> unless(isNil)(pipe(split('='), nth(1))), <br>) </pre> | <pre>const getMyCookie = pipe( <br> find(startsWith('my-cookie=')), <br> split('='), <br> nth(1), <br>) </pre> |

Technically, Safe Ramda is a wrapper around Ramda.

Whenever a sensible return value presents itself, Safe Ramda avoids
`Uncaught TypeError`. Inspiration for sensible return values comes primarily
from [Sanctuary](https://sanctuary.js.org/).

## Install

This package is not on NPM, but on [JSR](https://jsr.io/).

### Deno

```js
import { identity, map } from 'jsr:@alexbepple/safe-ramda'
map(identity, null) // => null
```

### NPM-based package managers

With native JSR support (e.g. Yarn 4.9+): `yarn add jsr:@alexbepple/safe-ramda`\
Without native JSR support: `npx jsr add @alexbepple/safe-ramda`\
(see [JSR docs](https://jsr.io/docs/npm-compatibility) for more details)

And then as usual:

```js
import { identity, map } from '@alexbepple/safe-ramda'
map(identity, null) // => null
```

## Versions

| Safe Ramda | Ramda                                      |
| ---------- | ------------------------------------------ |
| *          | [0.31.3](https://ramdajs.com/0.31.3/docs/) |
