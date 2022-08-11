import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: 'kb-db.cncw5dvyumby.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    username: 'server',
    password: '00000000',
    database: 'kb',
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: [],
})
