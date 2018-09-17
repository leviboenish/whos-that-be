
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {user_id: 1, board_name: 'Game of Thrones'},
        {user_id: 1, board_name: 'Westworld'},
        {user_id: 2, board_name: 'Vikings'},
        {user_id: 3, board_name: 'Doctor Who'},
      ]);
    });
};
