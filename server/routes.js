var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  console.log("/" + route);
  // router.use('/' + route)
  // router.use('/' + route, function(req, res, next){
  //   console.log('Request URL:', req.originalUrl);
  //   console.log(controllers);
  //   console.log('Function', controllers["messages"].get)
  //   controllers["messages"].get(req, res);
  //   next();
  // });



  // router.get('/' + route, function(req, res){
  //   controllers[route].get(req, res);
  // })


  router.route("/" + route)
    // .get(function(req, res, next){ 
    //   controllers[route].get(req, res); 
    // })
    .get(controllers[route].get)
    .post(controllers[route].post);
}

//Route
// console.log("before router")
// router('/messages')
//   .all(function(req, res, next){
//     console.log("heres your url");
//     console.log(req.url);
//   })
//   .get(function(req, res, next){
//     //controllers["messages"].get(req, res);
//   })
//   .post(function(req, res, next){});

module.exports = router;