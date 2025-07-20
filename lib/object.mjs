import * as r from 'ramda'

export const pick = r.curry((props, obj) => r.pick(props, r.defaultTo({})(obj)))

export const whereEq = r.useWith(r.whereEq, [r.identity, r.defaultTo({})])
