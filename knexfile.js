module.exports = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './data/infos.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
