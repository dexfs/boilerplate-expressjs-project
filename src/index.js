import * as http from 'http'
import app from './server'
import logger from 'winston'
import config from './config'

logger.level = config.logger.level
const server = http.createServer(app)

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    logger.error('Address in use, retrying...', e)
    setTimeout(() => {
      server.close()
      server.listen(config.server.port)
    })
  }
})

server.listen(config.server.port, () =>
  logger.info(`Server now listening at`, config.server.port)
)
