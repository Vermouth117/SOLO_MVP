/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("order_info", (table) => {
    table.increments("id").primary();
    table.integer("flower_id").notNullable();
    table.string("flower_name", 32).notNullable();
    table.string("customer_name", 32);
    table.text("picture_url").notNullable();
    table.decimal("price", 8, 0).notNullable();
    table.integer("quantity").notNullable();
    table.date("date").notNullable();

    table.foreign("flower_id").references("flower_info.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable("order_info");
};
