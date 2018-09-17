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
    }

};
