'use strict'

const { from, map, pipe, tap } = require('../')
const { test } = require('tap')

test('object mode', t => {
  let i = 0

  const array = [1, 2, 3, 4]
  const source = from(array)
  const fn = map.obj(n => Math.pow(n, 2))
  const assert = tap(n => {
    t.type(n, 'number')
    t.ok(Number.isFinite(n))
    t.equal(Math.pow(array[i], 2), n)
    i++
  })

  pipe(source, fn, assert, t.done)
})
