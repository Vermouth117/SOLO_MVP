/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("flower_info", (table) => {
    table.increments("id").primary();
    table.string("name", 16).notNullable();
    table.text("picture_url").notNullable();
    table.decimal("price", 8, 0).notNullable();
    table.integer("quantity").notNullable();
    table.date("posted_date").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("flower_info");
};
