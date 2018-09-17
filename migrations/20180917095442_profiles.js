
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id'),
    table.text('fname'),
    table.text('lname'),
    table.text('username'),
    table.text('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles');
};
