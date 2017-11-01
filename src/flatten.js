const through = require('through2')

module.exports = () => {
  return through.obj(function (array, enc, next) {
    for (var i = 0; i < array.length; i++) {
      this.push(array[i])
    }
    next()
  })
}
