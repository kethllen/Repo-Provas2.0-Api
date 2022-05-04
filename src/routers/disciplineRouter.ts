import { Router } from "express";
import disciplineController from "../controllers/disciplineController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const DisciplineRouter = Router();

DisciplineRouter.get(
  "/disciplines",
  ensureAuthenticatedMiddleware,
  disciplineController.findMany
);

export default DisciplineRouter;
