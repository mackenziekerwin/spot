const db = require('../db')

exports.getById = (req, res) => {
  const { username } = req.params;
  db.conn.query(
    `select name, description, points from achievement
    join user_achievement using (achievement_id)
    where username = '${username}'`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}
