const configBase = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || '9002',
  database: process.env.DB_NAME || 'boilerplate',
  username: process.env.DB_USER || 'boilerplate',
  password: process.env.DB_PASSWORD || 'boilerplate',
  type: 'postgres',
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: false,
  synchronize: false,
  seeds: ['build/app/db/seeds/**/*.js'],
  factories: ['build/app/db/factories/**/*.js'],
  entities: ['build/app/**/*.entity.js'],
  migrations: ['build/migrations/*.js'],
};

module.exports = configBase;