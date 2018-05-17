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
const pluginBookshelfSoftDelete = require('bookshelf-soft-delete')
bookshelf.plugin(pluginBookshelfSoftDelete)

export default {
  knex,
  bookshelf
}
