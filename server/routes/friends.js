const db = require('../db')

// get all of a user's friends
exports.getById = (req, res) => {
  const { username } = req.params;
  db.conn.query(
    `select user_2 name from friendship where user_1 = '${username}'
    union select user_1 name from friendship where user_2 = '${username}'`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}
