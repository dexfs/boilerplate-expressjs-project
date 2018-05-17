import winston from 'winston'

const config = {
  logger: {
    level: process.env.LOGGER_LEVEL || 'debug',
    enabled: process.env.LOGGER_ENABLED
  }
}
winston.level = config.logger.level
if (!config.logger.enabled) {
  winston.remove(winston.transports.Console)
}

export default config
