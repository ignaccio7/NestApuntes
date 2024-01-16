import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '260298',
  database: 'my_db',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  subscribers: ['src/subscriber/**/*{.ts,.js}'],
});
