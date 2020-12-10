import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { useParams, Link } from 'react-router-dom'
import DataTable from './DataTable'
import SpottingTable from './SpottingTable'

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [spottings, setSpottings] = useState([])
  const [friends, setFriends] = useState([])
  const [achievements, setAchievements] = useState([])
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/users/${username}`)
      .then((response) => setUser(response.data[0]));
    
    Axios.get(`http://localhost:3001/spottings/${username}`)
      .then((response) => setSpottings(response.data));
    
    Axios.get(`http://localhost:3001/friends/${username}`)
      .then((response) => setFriends(response.data));
    
    Axios.get(`http://localhost:3001/achievements/${username}`)
      .then((response) => setAchievements(response.data));
    
    Axios.get(`http://localhost:3001/dogs/${username}`)
      .then((response) => setDogs(response.data));
  }, []);

  return (
    <div className='App'>
      <Typography variant='h3'>{username}</Typography>
      <Typography variant='h6'>{user.first_name} {user.last_name}</Typography>
      <Typography gutterBottom variant='body1'>From {user.city}, {user.state}</Typography>
      <Typography className='title' variant='h5'>Dogs</Typography>
      <Table>
        <TableHead><TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Breed</TableCell>
        </TableRow></TableHead>
        <TableBody>
          {dogs.map((dog) => (
            <TableRow key={dog.id}>
              <TableCell>{dog.name}</TableCell>
              <TableCell><Link to={`/breeds/${dog.breed_id}`}>{dog.breed}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!!spottings.length && <SpottingTable spottings={spottings} />}
      <Typography className='title' variant='h5'>Friends</Typography>
      <DataTable
          columns={['Username']}
          data={friends}
      />
      <Typography className='title' variant='h5'>Achievements</Typography>
      <DataTable
          columns={['Name', 'Description', 'Points']}
          data={achievements}
      />
    </div>
  );
}

export default Profile;
