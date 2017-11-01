const through = require('through2')

module.exports = (fn) => {
  return through.obj((obj, enc, next) => {
    return next(null, fn(obj))
  })
}
