const friends = require('../data/friends')

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
      return res.json(friends);
  }); 

  app.post("/api/friends", function(req, res) {
    // compatibility logic
    console.log(req.body)
    // for (let i = 0; i < friends.length; i++) {
      
    // }
    res.json(req.body);
  });
      
}

