import { describe, it } from "@std/testing/bdd";
import {map} from "./index.mjs";
import * as r from 'ramda'
import __ from 'hamjest'

describe('#map', () => {
    const fn = r.inc
    const list = ['foo', 'bar']

    it('works like r.map', () => {
        __.assertThat(map(fn, list), __.is(r.map(fn, list)))
    })
    it('is nil-safe', () => {
        // Arguments for nil as return value:
        // 1) `map` is considered a structure-preserving fn. What is the structure of nil? Nil?
        // 2) Sanctuary: S.map (S.toUpper) (S.Nothing) => S.Nothing. So, if nil is like S.Nothing, nil makes sense, too.
        __.assertThat(map(fn, undefined), __.is(undefined))
        __.assertThat(map(fn, null), __.is(null))
    })
    it('is curried', () => {
        __.assertThat(map(fn)(list), __.is(map(fn, list)))
    })
})
