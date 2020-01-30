const errorHelper = require('../helpers/errorHandling')

module.exports = function(err, req, res, next) {
  //   console.log(err)
  let errorToSend = errorHelper(err)
  // console.log(errorToSend)
  res.status(errorToSend.statusCode).json(errorToSend)
}
