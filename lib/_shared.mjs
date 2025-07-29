import * as r from 'ramda'

export const defaultingLastArgTo = (defaultValue) => (fn) =>
  r.curry(
    r.nAry(fn.length)((...args) =>
      r.apply(
        fn,
        r.over(r.lensIndex(fn.length - 1))(r.defaultTo(defaultValue))(args),
      )
    ),
  )
