'use strict'

const fromArray = require('from2-array')

module.exports = (source) => {
  if (Array.isArray(source)) return fromArray.obj(source)

  throw TypeError(`Failed to create stream: Unsupported type ${typeof source}`)
}
