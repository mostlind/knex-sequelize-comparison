import Filters from "../models/Filters";
import { Request, Response, Router } from "express";

async function postHandler(req: Request, res: Response) {
  const filter = req.body;

  await Filters.create({
    contentJSON: JSON.stringify(filter.filter),
    filterName: filter.filterName
  });

  res.json({ message: "ok" });
}

async function getHandler(req: Request, res: Response) {
  const filters = await Filters.findAll();

  res.json(filters);
}

export function createFilterService() {
  const router = Router();
  router.get("/", getHandler);
  router.post("/", postHandler);
  return router;
}
