'use strict'

const {
  from, filter, map, parallel, pipe, inspect
} = require('../')

pipe(
  from([1, 2, 3, 4, 5]),
  // tap(n => console.log(n)),
  filter.obj(n => n % 2 === 0), // only even numbers
  map(n => n * n), // pow 2
  parallel(2, (data, next) => {
    return next(null, data / 2)
  }),
  inspect()
)
