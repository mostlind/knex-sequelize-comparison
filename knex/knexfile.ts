import * as knex from "knex";
import { config } from "dotenv";
config();

export const development: knex.Config = {
  client: "mssql",
  connection: process.env.DB_CONNECTION_STRING,
  migrations: {
    tableName: "knex-filters-migration"
  }
};
