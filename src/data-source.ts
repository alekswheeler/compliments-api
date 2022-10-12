import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entities/User'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'complimentsdb',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['../migration/*.ts'],
  subscribers: [],
})
