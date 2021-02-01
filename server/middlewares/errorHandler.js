function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "SequelizeValidationError":
      let errors = err.errors.map(elem => elem.message)
      res.status(422).json({ errors })
      break
    case "SequelizeDatabaseError":
      res.status(422).json({ errors })
      break
    case "UnprocessibleEntity":
      res.status(422).json({ errors: err.errors })
      break
    default:
      console.log(err);
      res.status(500).json({ errors: ['Internal Server Error'] })
      break
  }
}

module.exports = errorHandler