'use strict'

const _ = require('../')

_([1, 2, 3, 4, 5])
  // .tap(n => console.log(n))
  .filter(n => n % 2 === 0) // only even numbers
  .map(n => n * n) // pow 2
  .parallel(2, (data, next) => {
    return next(null, data / 2)
  })
  .inspect()
  .map(n => `${n.toString()}\n`) // pow 2
  .toStream()
  .pipe(process.stdout)
