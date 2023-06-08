
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'flower_shop',
      user: 'user',
    },
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    pool: {
      min: 2,
      max: 10
    },
  },

};
