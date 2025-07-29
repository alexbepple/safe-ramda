import * as r from 'ramda'

export const binaryDefaultingLastArgTo = (defaultValue) => (fn) =>
  r.curry((firstArg, secondArg) =>
    fn(firstArg, r.defaultTo(defaultValue)(secondArg))
  )
