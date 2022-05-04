import { Request, Response } from "express";
import * as instructorsService from "../services/instructorsService.js";

async function getInstructorsByDiscipline(req: Request, res: Response) {
  const disciplineId: number = parseInt(req.params.id);

	const teachersByDiscipline = await instructorsService.getInstructorsByDiscipline(disciplineId);

	res.send(teachersByDiscipline);
}

export  {
  getInstructorsByDiscipline
};
