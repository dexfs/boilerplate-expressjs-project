export default (req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Error on route. This route exist?',
    route: req.originalUrl
  })
}
