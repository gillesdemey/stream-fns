'use strict'

const through = require('through2')

module.exports = fn => {
  return through.obj((obj, enc, next) => {
    fn(obj)
    return next(null, obj)
  })
}
