import { prisma } from '../database.js';

export async function getInstructorsByDiscipline(disciplineId: number) {
	const instructorsByDiscipline = await prisma.teacher.findMany({
		include: {
			teacherDisciplines: {
				include: {
					discipline: true
				},
				where: {
					disciplineId: disciplineId
				}
			}
		}
	});

	return instructorsByDiscipline;
}