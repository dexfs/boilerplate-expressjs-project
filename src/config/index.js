if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ silent: true })
}

import logger from './components/logger'
import server from './components/server'
import database from './database'

export default Object.assign({}, logger, server, database)
