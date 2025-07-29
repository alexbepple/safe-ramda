import { describe, it } from '@std/testing/bdd'
import {
  all,
  any,
  filter,
  find,
  head,
  includes,
  last,
  map,
  none,
  nth,
  reverse,
  startsWith,
} from './index.mjs'
import * as r from 'ramda'
import __ from 'hamjest'
import { assertFalse, assertTrue } from './hamjest.test.mjs'

describe('get single element – maybe', () => {
  const list = ['foo']

  describe('#find', () => {
    it('is nil-safe', () => {
      __.assertThat(find(r.T)(null), __.is(undefined))
    })
  })

  describe('#head', () => {
    it('works like r.head', () => {
      __.assertThat(head(list), __.is(r.head(list)))
    })
    it('is nil-safe', () => {
      // arguments for nil as return value:
      // 1) intuition: a bit of nothing is nothing
      // 2) Sanctuary: S.head (S.Nothing) => S.Nothing. So, if nil is like S.Nothing, nil makes sense, too.
      __.assertThat(head(null), __.is(undefined))
    })
  })

  describe('#nth', () => {
    it('works like r.nth', () => {
      __.assertThat(nth(0, list), __.is(r.nth(0, list)))
    })
    it('is nil-safe', () => {
      // arguments for nil as return value: cp. `head`
      __.assertThat(nth(0, null), __.is(undefined))
    })
    it('is curried', () => {
      __.assertThat(nth(0)(list), __.is(nth(0, list)))
    })
  })

  describe('#last', () => {
    it('works like r.last', () => {
      __.assertThat(last(list), __.is(r.last(list)))
    })
    it('is nil-safe', () => {
      // S.last (Nil) === Nothing
      __.assertThat(last(null), __.is(undefined))
    })
  })
})

describe('get another list – maybe (preserve structure)', () => {
  describe('#filter', () => {
    it('works like r.filter', () => {
      const list = ['foo']
      __.assertThat(filter(r.T)(list), __.is(list))
      __.assertThat(filter(r.F)(list), __.is([]))
    })
    it('is nil-safe', () => {
      // Motivation for behavior:
      // 1) Ramda "returns a new filterable of the same type" (https://ramdajs.com/docs/#filter)
      // 2) Sanctuary: S.filter (S.T) (S.Nothing) === S.Nothing
      __.assertThat(filter(r.T)(null), __.is(null))
      __.assertThat(filter(r.T)(undefined), __.is(undefined))
    })
  })

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

  describe('#reverse', () => {
    it('behaves like its Ramda equivalent', () => {
      const list = ['foo', 'bar']
      __.assertThat(reverse(list), __.is(r.reverse(list)))
    })
    it('is nil-safe', () => {
      __.assertThat(reverse(null), __.is(reverse([])))
    })
  })
})

describe('predicates', () => {
  describe('#includes', () => {
    const [needle, haystack] = ['foo', 'bar']
    it('behaves like its Ramda equivalent', () => {
      __.assertThat(includes('', ''), __.is(r.includes('', ''))) // edge case
      __.assertThat(
        includes(needle, haystack),
        __.is(r.includes(needle, haystack)),
      )
    })
    it('can be applied partially', () => {
      __.assertThat(
        includes(needle)(haystack),
        __.is(includes(needle, haystack)),
      )
    })
    it('does not explode with nil haystack', () => {
      assertFalse(includes('', undefined))
    })
  })

  describe('#startsWith', () => {
    it('behaves like its Ramda equivalent', () => {
      __.assertThat(startsWith('', ''), __.is(r.startsWith('', ''))) // edge case
      assertTrue(startsWith('foo', 'foobar'))
      assertFalse(startsWith('foo', ''))
    })
    it('does not explode on nil haystack', () => {
      assertFalse(startsWith('', null))
    })
    it('is curried', () => {
      __.assertThat(startsWith('foo')('bar'), __.is(startsWith('foo', 'bar')))
    })
  })

  describe('set predicates', () => {
    ;[
      ['all', all],
      ['none', none],
      ['any', any],
    ].forEach(([name, safeFn]) =>
      describe(`#${name}`, () => {
        it('behaves like its Ramda equivalent', () => {
          __.assertThat(safeFn(r.T, [42]), __.is(r[name](r.T, [42])))
          __.assertThat(safeFn(r.F, [42]), __.is(r[name](r.F, [42])))
        })
        it('is nil-safe', () => {
          // 1) intuition: nil is like empty set
          // 2) Sanctuary concurs
          __.assertThat(safeFn(r.T, null), __.is(safeFn(r.T, [])))
          __.assertThat(safeFn(r.F, undefined), __.is(safeFn(r.F, [])))
        })
      })
    )
  })
})
