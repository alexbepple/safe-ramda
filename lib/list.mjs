import {curry, isNil, map as rMap} from 'npm:ramda@0.31.3'

export const map = curry((fn, functor) =>
    isNil(functor) ? functor : rMap(fn, functor),
)
