const db = require('../db')

exports.get = (req, res) => {
  db.conn.query(
    `select spotting_id id, username, dog.name dog, breed.name breed
    from spotting join dog using(dog_id) join breed on(dog.breed_id = breed.breed_id)`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else { 
        res.send(results);
      }
    }
  )
}

exports.getByUserId = (req, res) => {
  const { username } = req.params;
  db.conn.query(
    `select dog.name dog, breed.name breed, image_url, zip_code from spotting
    join dog using (dog_id)
    join breed on (dog.breed_id) = breed.breed_id
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
