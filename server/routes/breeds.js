const db = require('../db')

// get a list of all dog breeds
exports.get = (req, res) => {
  db.conn.query(
    `select * from breed`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}

// describe all dogs of the given breed
exports.getById = (req, res) => {
  const { breed_id } = req.params;
  db.conn.query(
    `select dog_id id, dog.name name, owner,
    breed.name breed, user.zip_code, count(spotting_id) spottings
    from dog join breed using (breed_id)
    join user on (dog.owner = user.username)
    left join spotting using (dog_id)
    where dog.breed_id = ${breed_id}
    group by dog_id
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

