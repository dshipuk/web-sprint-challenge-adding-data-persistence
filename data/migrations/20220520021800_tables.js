exports.up = async function (knex) {
    await knex.schema.createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.string("project_description", 128);
      table.bool("project_completed");
    });
  
    await knex.schema.createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).unique().notNullable();
      table.string("resource_description", 128);
    });
  
    await knex.schema.createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description", 128).notNullable();
      table.string("task_notes", 128);
      table.bool("task_completed");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
  };
  
  exports.down = async function (knex) {
    await knex.schema
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };
  