import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import DataTable from './DataTable'

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [spottings, setSpottings] = useState([])
  const [friends, setFriends] = useState([])
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/users/${username}`)
      .then((response) => setUser(response.data[0]));
    
    Axios.get(`http://localhost:3001/spottings/${username}`)
      .then((response) => setSpottings(response.data));
    
    Axios.get(`http://localhost:3001/friends/${username}`)
      .then((response) => setFriends(response.data));
    
    Axios.get(`http://localhost:3001/achievements/${username}`)
      .then((response) => setAchievements(response.data));
  }, []);
  console.log(friends);

  return (
    <div className='App'>
      <Typography gutterBottom variant='h3'>{username}</Typography>
      <Typography variant='h6'>{user.first_name} {user.last_name}</Typography>
      <Typography gutterBottom variant='body1'>From {user.city}, {user.state}</Typography>
      {!!spottings.length && <Typography variant='h5'>Spottings</Typography>}
      {!!spottings.length && (
        <DataTable
          columns={['Dog', 'Breed', 'Date', 'Zip Code']}
          data={spottings}
        />
      )}
      <Typography variant='h5'>Friends</Typography>
      <DataTable
          columns={['Username']}
          data={friends}
      />
      <Typography variant='h5'>Achievements</Typography>
      <DataTable
          columns={['Name', 'Description', 'Points']}
          data={achievements}
        />
    </div>
  );
}

export default Profile;
