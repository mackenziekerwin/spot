import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Breeds() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/breeds')
      .then((response) => setBreeds(response.data));
  }, []);

  return (
    <div className='App'>
      <Typography variant='h3'>Breeds</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {breeds.map((breed) => (
          <TableRow key={breed.breed_id}>
            <TableCell><Link to={`/breeds/${breed.breed_id}`}>{breed.name}</Link></TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Breeds;
