var mysql = require('mysql');
var bluebird = require('bluebird');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//Create connection object
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});
//Connect to database
connection.connect();
//Query for all messages
module.exports = {
  //Message requests
  messages: {
    //Get messages query
    getMessages: function(){
      return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM messages ORDER BY createdAt DESC", function(err, rows, fields){
          //If there's an error

          //Logging that there rows are here
          console.log("HERES YOUR ROWS !!!!");
          console.log(rows);
          if(err){
            reject(err);
          }
          else{
            console.log(rows);
            resolve(rows);
          }
        });
      });
    },
    //Post message query
    postMessage: function(obj){
      return new Promise(function(resolve, reject){
        var queryString = "INSERT INTO messages (userId, text, roomName) values(";
        queryString += (1 + ", " + obj.text + ", " + obj.roomname + ")");
        connection.query(queryString, function(err){
          if(err){
            reject(err);
          }
          else{
            resolve();
          }
        });
      });
    }
  },

  //User requests
  users: {

  }

};