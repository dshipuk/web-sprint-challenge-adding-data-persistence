const db = require("../../data/dbConfig");

async function getResources() {
  return await db("resources");
}

async function createResource(resource) {}

module.exports = {
  getResources,
  createResource,
};
