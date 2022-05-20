const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks");
  const projects = await db("projects");
  tasks.map((task) => {
    task.task_completed === 0
      ? (task.task_completed = false)
      : (task.task_completed = true);
    projects.map((project) => {
      if (project.project_id === task.project_id) {
        Object.assign(task, {
          project_name: project.project_name,
          project_description: project.project_description,
        });
      }
    });
  });

  return tasks;
}

function createTask(task) {
  return db("tasks")
    .insert(task)
    .then(([task_id]) => db("tasks").where("task_id", task_id).first());
}

module.exports = {
  getTasks,
  createTask,
};
