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
      var queryString = "SELECT * FROM messages ORDER BY createdAt ASC;";
      return new Promise(function(resolve, reject){
        connection.query(queryString, function(err, rows, fields){
          //If there's an error
          //Logging that there rows are here
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
      //Add user if they don't exist
      var queryString = "SELECT * FROM users WHERE username = '" + obj.username + "';";
      connection.query(queryString, function(err, rows){
        if(rows.length === 0){
          //Insert user
          queryString = "INSERT INTO users (username) values('" + obj.username + "');";
          connection.query(queryString, function(err){console.log("han yolo");});
        }
      });
      return new Promise(function(resolve, reject){
        queryString = "INSERT INTO messages (username, text, roomName) values(";
        queryString += ("'"+obj.username + "', '" + obj.text + "', '" + obj.roomname + "');");
        console.log(queryString);
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