import { Filter } from ".";
import * as knex from "knex";
import { Request, Response } from "express";

const filtersTable = "filters-knex";

function validateFilter(filter: Filter) {
  // Looks good to me
  return true;
}

function insertQueryFactory(knex: knex): (filter: Filter) => PromiseLike<void> {
  return filter => knex(filtersTable).insert(filter);
}

export function insertFilterHandlerFactory(knex: knex) {
  const insertQuery = insertQueryFactory(knex);

  return function insertFilterHandler(req: Request, res: Response) {
    const body = req.body;
    const filter = {
      name: body.name,
      contentJSON: JSON.stringify(body.content)
    };

    if (!validateFilter(filter)) {
      return res.status(400).json({ message: "get out of here" });
    }

    insertQuery(filter).then(() => {
      res.status(200).json({ message: "ok" });
    });
  };
}
