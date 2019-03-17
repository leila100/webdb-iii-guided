// What changes are to be applied to the database
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    // Primary key called id, integer, autoincrements
    tbl.increments()

    tbl.string("name", 128).notNullable()

    tbl //create a reference to the role id
      .integer("role_id")
      .unsigned()
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")

    tbl.timestamps(true, true)
  })
}

// how can I undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
}
