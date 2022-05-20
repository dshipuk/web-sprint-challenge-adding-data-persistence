const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");
  projects.map((project) => {
    project.project_completed === 0
      ? (project.project_completed = "false")
      : (project.project_completed = "true");
  });
  return projects;
}

async function createProject(project) {}

module.exports = {
  getProjects,
  createProject,
};
