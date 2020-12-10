import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/leaderboard')
      .then((response) => setLeaderboard(response.data))
  }, [])
  
  return (
    <div className='App'>
      <Typography variant='h3'>Top Users in the Country</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboard.map((user, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell><Link to={`users/${user.username}`}>{user.username}</Link></TableCell>
              <TableCell>{user.points}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Leaderboard;
