const through = require('through2')

const noop = (o) => o

module.exports = (fn, opts = {}) => {
  return through(_map(fn))
}

module.exports.obj = (fn) => {
  return through.obj(_map(fn))
}

function _map (fn = noop) {
  return (obj, enc, next) => {
    return next(null, fn(obj))
  }
}
