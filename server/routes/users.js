const db = require('../db')

exports.get = (req, res) => {
  db.conn.query(
    `select * from user`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}

exports.getById = (req, res) => {
  const { username } = req.params;
  db.conn.query(
    `select * from user join location using (zip_code)
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
