// const friends = require('../data/friends')

// module.exports = function(app){
//   // get request aimed at /api/friends
//   app.get("/api/friends", function(req, res) {
    
//     // sends the friends object to the client
//       return res.json(friends);
//   }); 

//   // post request aimed at /api/friends
//   app.post("/api/friends", function(req, res) {
    
//     // converts scores to numbers
//     let user = req.body;
//     user.scores.map((score, index) =>{
//       user.scores[index] = parseInt(score);
//     });
   
//     // variable that the difference count will be compared to
//     let bestDifference = 100;

//     // variable that will hold the friends object with the lowest difference value
//     let bestMatch;
    
//     // Loop for calculating differences
//     for (let i = 0; i < friends.length; i++) {
      
//       // resets the difference value of all the objects in friends
//       friends[i].difference = 0;

//       // Loops over each score item and calculate the differance value
//       for (let x = 0; x < friends[i].scores.length; x++) {
//             difference = Math.abs(friends[i].scores[x] - user.scores[x])
//             friends[i].difference += difference;
//           }
//     }

//     // loops over each friends item and compares the difference value to calculate the lowest score
//     for (let y = 0; y < friends.length; y++) {
//       if (friends[y].difference < bestDifference) {
//         bestDifference = friends[y].difference;
//         bestMatch = friends[y]

//         // adds the user's submission to the friends array
//         friends.push(user)
//       }
//     }
//     // Send the bestMatch object to the client
//     res.json(bestMatch);
//   });
      
// }

