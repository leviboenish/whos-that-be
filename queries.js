const database = require("./database-connection");

module.exports = {
    getProfiles(){
      return database('profiles');
    },

    getBoards(){
      return database('boards');
    },

    getCharacters(){
      return database('characters');
    },

    getCharactersByBoard(id){
      return database('characters').where('board_id', id);
    },

    newUser(profile){
      return database('profiles').insert(profile).returning('*').then(record => {
      record[0];
    });
    },

    addCharacter(){

    },

    addBoard(){

    },

    updateCharacter(){

    },

    updateBoard(){

    },

    deleteCharacter(){

    },

    deleteBoard(){

    }

};
