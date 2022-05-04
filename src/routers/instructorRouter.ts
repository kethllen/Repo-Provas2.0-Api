import { Router } from "express";
import * as instructorsController from "../controllers/instructorsController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const instructorsRouter = Router();


instructorsRouter.get('/instructors/disciplines/:id', 
ensureAuthenticatedMiddleware, instructorsController.getInstructorsByDiscipline);

export default instructorsRouter