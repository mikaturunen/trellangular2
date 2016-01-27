
var seneca = require('seneca')

seneca()
  .client()
  .act('color:red', console.log)
