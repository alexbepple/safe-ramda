import { describe, it } from '@std/testing/bdd'
import __ from 'hamjest'
import { split } from './index.mjs'
import { nil } from './hamjest.test.mjs'

describe('#split', () => {
  it('is nil-safe', () => {
    __.assertThat(split('x')(null), __.is(nil()))
  })
})
