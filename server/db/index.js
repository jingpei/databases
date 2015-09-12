var mysql = require('mysql');

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
      connection.query("SELECT * FROM messages ORDER BY createdAt DESC", function(err, rows, fields){
        //If there's an error
        if(err) throw err;
        console.log(rows);
        return rows;
      });
    }
  },
  //User requests
  users: {

  }

};