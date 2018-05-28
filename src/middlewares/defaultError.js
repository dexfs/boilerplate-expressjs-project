export default (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json('login Error')
  }

  if (err.name === 'CustomError') {
    if (err.message === 'No Rows Updated') {
      res.status(200).json({
        error: true,
        data: [
          {
            name: err.name,
            message: err.message
          }
        ]
      })
    }
  } else {
    res.status(500).json({
      error: true,
      data: [
        {
          name: err.name,
          message: err.message
        }
      ]
    })
  }
}
