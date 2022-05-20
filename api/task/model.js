const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks");
  tasks.map((task) => {
    task.task_completed === 0
      ? (task.task_completed = "false")
      : (task.task_completed = "true");
  });
  return tasks;
}

async function createTask(task) {}

module.exports = {
  getTasks,
  createTask,
};
