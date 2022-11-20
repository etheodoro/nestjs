module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'dev',
    password: '1234',
    database: 'course_nestjs',
    entities: ['dist/**/*.entity.js'],
    migration: ['dist/migrations/*.js'],
    cli: {
      migrationsDir: ['src/migrations/*.js'],
    }
};