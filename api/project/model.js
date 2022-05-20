const db = require("../../data/dbConfig");

async function getProjects() {
    return await db("projects")
}

async function createProject(project) {

}

module.exports = {
    getProjects,
    createProject
}