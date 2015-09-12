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
      //Request data
      var reqData = "";
      req.on("data", function(chunk){
        reqData += chunk;
      });
      req.on("end", function(){
        //Make a promise (these matter)
        models.messages.get()
        .then(function(rows){
          //Set headers here
          res.writeHead(200, headers);
          //End here
          res.end(JSON.stringify({results: rows}));
        });
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //Get data
      var reqData = "";
      console.log("1 starting post");
      console.log(req.body);
      //On end
      console.log("3 called end");
      models.messages.post(req.body)
      .then(function(){
        res.writeHead(201, headers);
        res.end(JSON.stringify({results: []}));
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

