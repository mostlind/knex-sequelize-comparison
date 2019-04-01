import * as knex from "knex";
import { Router } from "express";
import { getFiltersHandlerFactory } from "./select";
import { insertFilterHandlerFactory } from "./insert";

export interface Filter {
  id?: number;
  name: string;
  contentJSON: string;
}

export function createFilterService(knex: knex) {
  const router = Router();
  router.get("/", getFiltersHandlerFactory(knex));
  router.post("/", insertFilterHandlerFactory(knex));

  return router;
}
