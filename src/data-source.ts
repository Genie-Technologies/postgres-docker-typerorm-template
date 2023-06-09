import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Message } from "./entity/Message"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Message],
    migrations: [],
    subscribers: [],
})
