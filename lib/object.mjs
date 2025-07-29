import * as r from 'ramda'
import { binaryDefaultingLastArgTo } from './_shared.mjs'

export const pick = binaryDefaultingLastArgTo({})(r.pick)
export const whereEq = binaryDefaultingLastArgTo({})(r.whereEq)
