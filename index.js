'use strict'

const filter = require('./src/filter')
const from = require('./src/from')
const tap = require('./src/tap')
const map = require('./src/map')
const parallel = require('./src/parallel')
const util = require('util')

class FunctionStream {
  // convert everything to a readable or duplex stream
  constructor (source) {
    this._source = from(source)
    return this
  }

  map (fn) {
    return this._pipe(map(fn))
  }

  filter (fn) {
    return this._pipe(filter(fn))
  }

  tap (fn) {
    return this._pipe(tap(fn))
  }

  inspect () {
    return this._pipe(
      tap(o => console.log(util.inspect(o)))
    )
  }

  parallel (...args) {
    return this._pipe(
      parallel(...args)
    )
  }

  // pipe data through function and update our source
  // returns this instance to allow method chaining
  _pipe (through) {
    this._source = this._source.pipe(through)
    return this
  }
}

module.exports = (source) => {
  return new FunctionStream(source)
}