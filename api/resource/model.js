const db = require("../../data/dbConfig");

async function getResources() {
  return await db("resources");
}

function createResource(resource) {
  return db("resources").insert(resource)
    .then( ([resource_id]) => db("resources").where("resource_id", resource_id).first() )
}


module.exports = {
  getResources,
  createResource,
};
