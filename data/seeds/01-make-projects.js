const project = [
  { project_name: "foo", }
]

const resource = [
  { resource_name: "bar", }
]

const task = [
  { task_description: "combine", project_id: 1 }
]


exports.seed = async function(knex) {
  await knex("projects").insert(project)
  await knex("resources").insert(resource)
  await knex("tasks").insert(task)
};
