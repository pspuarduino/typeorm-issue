"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: 'local',
    type: 'postgres',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5432,
    database: process.env.DB_NAME || 'dbname',
    schema: process.env.DB_SCHEMA_NAME || 'schemaname',
    logging: false,
    synchronize: true,
    dropSchema: false,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    entities: []
};
