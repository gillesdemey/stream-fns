'use strict'

const tap = require('./tap')
const util = require('util')

module.exports = () => {
  return tap(o => console.log(util.inspect(o)))
}
