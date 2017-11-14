const through = require('through2')

const noop = () => true

module.exports = (fn, opts = {}) => {
  return opts.objectMode
    ? module.exports.obj(fn)
    : through(_filter(fn))
}

module.exports.obj = (fn) => {
  return through.obj(_filter(fn))
}

function _filter (fn = noop) {
  return (obj, enc, next) => {
    return fn(obj) ? next(null, obj) : next(null)
  }
}
