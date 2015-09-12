var db = require('../db');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    //Get message handoff to db/index.js
    get: function () {
      //Return
      return db.messages.getMessages()
        .then(function(rows){
          return rows;
        });
    }, // a function which produces all the messages
    post: function (obj) {
      return db.messages.postMessage(obj);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

