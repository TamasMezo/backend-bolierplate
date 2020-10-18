const { Config } = require('@foal/core')

const configBase = {
  type: Config.get('database.type'),
  database: Config.get('database.database'),
  host:  Config.get('database.host'),
  port: Config.get('database.port'),
  username: Config.get('database.username'),
  password: Config.get('database.password'),
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: false,
  synchronize: Config.get('database.synchronize') || false,
  seeds: ['build/app/db/seeds/**/*.js'],
  factories: ['build/app/db/factories/**/*.js'],
  entities: ['build/app/**/*.entity.js'],
  migrations: ['build/migrations/*.js'],
};


module.exports = configBase;