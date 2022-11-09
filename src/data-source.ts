import "reflect-metadata";
import { DataSource } from "typeorm";
// import { User } from "./entity/User" 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "blog",
    password: "",
    database: "blog_development",
    synchronize: false, // 同步数据库和 entity，生产环境绝对禁止
    logging: false,
    entities: [

    ],
    migrations: [

    ],
    subscribers: [

    ],
});
