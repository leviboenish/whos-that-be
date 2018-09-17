
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {board_id: 1, deceased: false, name: 'Arya Stark', image_url: 'test.test', notes: 'some info here'},
        {board_id: 1, deceased: true, name: 'Ned Stark', image_url: 'test.test', notes: 'some info here'},
        {board_id: 1, deceased: false, name: 'Tyrion Lannister', image_url: 'test.test', notes: 'some info here'},
        {board_id: 2, deceased: false, name: 'Teddy', image_url: 'test.test', notes: 'some info here'},
        {board_id: 2, deceased: false, name: 'Delores', image_url: 'test.test', notes: 'some info here'},
        {board_id: 2, deceased: true, name: 'William', image_url: 'test.test', notes: 'some info here'},
        {board_id: 3, deceased: true, name: 'Ragnar', image_url: 'test.test', notes: 'some info here'},
        {board_id: 3, deceased: false, name: 'Ivar', image_url: 'test.test', notes: 'some info here'},
        {board_id: 4, deceased: false, name: 'The Doctor', image_url: 'test.test', notes: 'some info here'},
        {board_id: 4, deceased: false, name: 'Rose Tyler', image_url: 'test.test', notes: 'some info here'}
      ]);
    });
};
