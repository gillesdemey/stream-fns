'use strict'

const { from, filter, pipe, tap } = require('../')
const { test } = require('tap')

test('object mode', t => {
  const source = from([1, 2, 3, 4])
  const fn = filter.obj(n => n % 2 === 0)
  const assert = tap(n => {
    t.type(n, 'number')
    t.ok(Number.isFinite(n))
    t.ok(n % 2 === 0)
  })

  pipe(source, fn, assert, t.done)
})
