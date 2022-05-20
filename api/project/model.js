const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");
  projects.map((project) => {
    project.project_completed === 0
      ? (project.project_completed = false)
      : (project.project_completed = true);
  });
  return projects;
}

function createProject(project) {
  return db("projects").insert(project)
    .then( ([project_id]) => db("projects").where("project_id", project_id).first() )
}

module.exports = {
  getProjects,
  createProject,
};
