"use strict";

console.log('data-source exec');

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
// import { User } from "./entity/User" 

var AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "blog",
  password: "",
  database: "blog_development",
  synchronize: false,
  // 同步数据库和 entity，生产环境绝对禁止
  logging: false,
  entities: ["./entity/**/*.j s"],
  migrations: ["./migration/**/*.js"],
  subscribers: []
});
exports.AppDataSource = AppDataSource;