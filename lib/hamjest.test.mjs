import __ from 'hamjest'

export const assertTrue = (_) => __.assertThat(_, __.is(true))
export const assertFalse = (_) => __.assertThat(_, __.is(false))
