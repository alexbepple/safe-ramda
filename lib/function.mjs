import * as r from 'ramda'

export const apply = r.curry((fn, args) => (fn ? r.apply(fn, args) : undefined))
