
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id'),
    table.integer('board_id'),
    table.boolean('deceased'),
    table.text('name'),
    table.text('image_url'),
    table.text('notes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters');
};
