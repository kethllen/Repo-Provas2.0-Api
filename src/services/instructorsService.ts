import * as instructorsRepository from '../repositories/instructorsRepository.js';

export  async function getInstructorsByDiscipline(disciplineId: number) {
	const instructorsByDiscipline = await instructorsRepository.getInstructorsByDiscipline(disciplineId);

	return instructorsByDiscipline;
}