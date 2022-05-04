import disciplineRepository from "../repositories/disciplineRepository.js";

async function findMany() {
  const test = await disciplineRepository.findMany();
  return test;
}

export default {
  findMany,
};
