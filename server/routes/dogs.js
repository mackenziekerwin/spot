const db = require('../db')

// get a list of all registered dogs
exports.get = (req, res) => {
  db.conn.query(
    `select dog_id id, dog.name name, breed.name breed, breed_id, owner
    from dog join breed using (breed_id)`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}

// get a list of a user's dogs
exports.getByUserId = (req, res) => {
  const { username } = req.params;
  db.conn.query(
    `select dog_id id, dog.name name, breed.name breed, breed_id
    from dog join breed using (breed_id)
    where owner = '${username}'`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}

