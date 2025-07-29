import * as r from 'ramda'
import { defaultingLastArgTo } from './_shared.mjs'

export const pick = defaultingLastArgTo({})(r.pick)
export const whereEq = defaultingLastArgTo({})(r.whereEq)
