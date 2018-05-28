// @flow
const config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
}
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)
bookshelf.plugin(require('bookshelf-soft-delete'))
bookshelf.plugin(require('bookshelf-uuid'))
bookshelf.plugin(require('bookshelf-modelbase').pluggable)

export default { knex, bookshelf }
