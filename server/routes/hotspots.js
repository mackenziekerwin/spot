const db = require('../db')

// get a list of cities ordered by the number of spottings
exports.get = (req, res) => {
  db.conn.query(
    `select city, state, count(spotting_id) spottings
    from location
    join spotting using (zip_code)
    group by city, state
    order by spottings desc`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}
