
exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', (table) => {
    table.increments('id'),
    table.integer('user_id'),
    table.text('board_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boards');
};
