const express = require('express')
const app = express()
const cors = require('cors')
const spottings = require('./routes/spottings')
const hotspots = require('./routes/hotspots')
const leaderboard = require('./routes/leaderboard')
const users = require('./routes/users')
const friends = require('./routes/friends')
const achievements = require('./routes/achievements')
const dogs = require('./routes/dogs')
const breeds = require('./routes/breeds')

app.use(cors());
app.use(express.json());

// spottings
app.get('/spottings', spottings.get);
app.get('/spottings/:username', spottings.getByUserId);

// hotspots
app.get('/hotspots', hotspots.get);

// leaderboards
app.get('/leaderboard', leaderboard.get);

// users
app.get('/users', users.get);
app.get('/users/:username', users.getById);

// friends
app.get('/friends/:username', friends.getById);

// achievements
app.get('/achievements/:username', achievements.getById);

// dogs
app.get('/dogs', dogs.get);
app.get('/dogs/:username', dogs.getByUserId);

// breeds
app.get('/breeds', breeds.get);
app.get('/breeds/:breed_id', breeds.getById);

app.listen(3001, () => console.log('Server running on port 3001'));
