var models = require('../models');
var bluebird = require('bluebird');

//Headers
var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      //Once all data is received
      console.log("1 we are in controller");
      //Request data
      var reqData = "";
      req.on("data", function(chunk){
        reqData += chunk;
      });
      req.on("end", function(){
        console.log("Your data is: " + reqData);
        console.log(" 2 ended");
        //Make a promise (these matter)
        models.messages.get()
        .then(function(rows){
          //Set headers here
          res.writeHead(200, headers);
          //End here
          res.end({results: rows});
        });
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

