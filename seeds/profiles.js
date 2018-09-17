
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {fname: 'John', lname: 'Doe', username: 'Jdoe123', password: 'passw0rd'},
        {fname: 'Jane', lname: 'Doe', username: 'Jadoe098', password: 'pa55w0rd'},
        {fname: 'Someone', lname: 'Else', username: 'somelse987', password: 'password44'}
      ]);
    });
};
