import createKnex from "knex";
import { development } from "./knexfile";
import { createFilterService } from "./filter-service";
import express from "express";
import bodyParser from "body-parser";

const knex = createKnex(development);

const app = express();

app.use(bodyParser.json());

const filterService = createFilterService(knex);
app.use("/filters", filterService);

app.listen(8080, () => {
  console.log("listening on 8080...");
});
