import { Sequelize } from "sequelize-typescript";
import express from "express";
import { createFilterService } from "./filter-service";
import { json } from "body-parser";

new Sequelize({
  database: "dev",
  dialect: "mssql",
  username: "sa",
  password: "Password1!",
  host: "127.0.0.1",
  modelPaths: [__dirname + "/models"]
});

const app = express();
app.use(json());

app.use("/filters", createFilterService());

app.listen(8081, () => {
  console.log("listening on 8081...");
});
