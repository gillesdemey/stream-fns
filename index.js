'use strict'

module.exports = {
  pipe: require('pump'),
  batch: require('./src/batch'),
  filter: require('./src/filter'),
  from: require('./src/from'),
  flatten: require('./src/flatten'),
  tap: require('./src/tap'),
  inspect: require('./src/inspect'),
  map: require('./src/map'),
  parallel: require('./src/parallel'),
  util: require('util')
}
