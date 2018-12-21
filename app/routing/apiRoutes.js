const friends = require('../data/friends')

module.exports = function(app){
  app.get("/api/friends", function(req, res) {
      return res.json(friends);
  }); 

  app.post("/api/friends", function(req, res) {
    
    // converts scores to numbers
    let user = req.body;
    user.scores.map((score, index) =>{
      user.scores[index] = parseInt(score);
    });
   
    let bestDifference = 100;
    let bestMatch;
    
    // Loop for calculating differences
    for (let i = 0; i < friends.length; i++) {
      friends[i].difference = 0;
      for (let x = 0; x < friends[i].scores.length; x++) {
            difference = Math.abs(friends[i].scores[x] - user.scores[x])
            friends[i].difference += difference;
          }
    }

    // Loop for calculating the best match
    for (let y = 0; y < friends.length; y++) {
      if (friends[y].difference < bestDifference) {
        bestDifference = friends[y].difference;
        bestMatch = friends[y]
      }
    }
    res.json(bestMatch);
  });
      
}

