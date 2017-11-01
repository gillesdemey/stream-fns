'use strict'

const through = require('through2')

// TODO on end of stream flush
// https://github.com/segmentio/batch-stream/issues/7
module.exports = (n = 1) => {
  let sink = []

  return through.obj(function (obj, enc, next) {
    sink.push(obj)
    if (sink.length >= n) {
      this.push(sink)
      sink = []
    }
    debugger
    next()
  })
  .on('end', function () {
    console.log('end')
  })
}
