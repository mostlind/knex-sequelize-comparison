import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("filters-knex", table => {
    table.increments();
    table.string("name");
    table.text("contentJSON");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("filters-knex");
}
