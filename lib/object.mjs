import * as r from 'ramda'

export const pick = r.curry((props, obj) => r.pick(props, r.defaultTo({})(obj)))
