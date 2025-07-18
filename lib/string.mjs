import * as r from 'ramda'

export const split = r.curry((separator, string) =>
  r.isNil(string) ? string : r.split(separator, string)
)
