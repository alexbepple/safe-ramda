import { curry, isNil, map as rMap } from 'ramda'

export const map = curry((fn, functor) =>
  isNil(functor) ? functor : rMap(fn, functor)
)
