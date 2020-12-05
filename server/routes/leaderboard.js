const db = require('../db')

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
