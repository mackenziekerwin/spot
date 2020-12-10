import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { useParams, Link } from 'react-router-dom'

function DogTable() {
  const { breed_id } = useParams();
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState('');

  useEffect(() => {
    Axios.get(`http://localhost:3001/breeds/${breed_id}`)
      .then((response) => {
        setDogs(response.data);
        setBreed(response.data[0].breed);
      });
  }, []);

  return (
    <div className='App'>
      <Typography variant='h3'>{breed}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>Spottings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dogs.map((dog) => (
          <TableRow>
            <TableCell>{dog.name}</TableCell>
              <TableCell><Link to={`/users/${dog.owner}`}>{dog.owner}</Link></TableCell>
              <TableCell>{dog.zip_code}</TableCell>
              <TableCell>{dog.spottings}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DogTable;
