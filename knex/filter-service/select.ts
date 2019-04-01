import * as knex from "knex";
import { Response, Request } from "express";
import { Filter } from ".";

const filtersTable = "filters-knex";

function mapFilterToResponse({ name, contentJSON }: Filter) {
  return {
    name,
    content: JSON.parse(contentJSON)
  };
}

function selectQueryFactory(knex: knex): () => PromiseLike<Filter[]> {
  return () =>
    knex(filtersTable)
      .columns(["name", "contentJSON"])
      .select();
}

export function getFiltersHandlerFactory(knex: knex) {
  const selectQuery = selectQueryFactory(knex);

  return async function selectFilterHandler(req: Request, res: Response) {
    const filters = await selectQuery();

    const reponseContent = filters.map(mapFilterToResponse);
    res.json(reponseContent);
  };
}
