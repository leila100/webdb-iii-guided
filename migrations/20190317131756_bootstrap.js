// What changes are to be applied to the database
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", function(tbl) {
    // Primary key called id, integer, autoincrements
    tbl.increments()

    tbl
      .string("name", 128)
      .notNullable()
      .unique()
    tbl.timestamps(true, true)
  })
}

// how can I undo the changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles")
}
