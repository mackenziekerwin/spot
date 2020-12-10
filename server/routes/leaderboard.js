const db = require('../db')

// get a list of the top 20 users with the most points
exports.get = (req, res) => {
  db.conn.query(
    `select username, sum(points) points from (
      select username, count(spotting_id) points
      from user
      join spotting using (username)
      group by username
      union
      select username, sum(points) points
      from user
      join user_achievement using (username)
      join achievement using (achievement_id)
      group by username
    ) b
    group by username
    order by points desc
    limit 20;`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}
