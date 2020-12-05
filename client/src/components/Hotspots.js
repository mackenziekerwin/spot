import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import MapChart from './MapChart'

function Hotspots() {
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/hotspots')
      .then((response) => setHotspots(response.data))
  }, [])
  
  return (
    <div className='App'>
      <Typography variant='h3'>Hotspots</Typography>
      {!!hotspots.length && <MapChart cities={hotspots} />}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Hotspot</TableCell>
            <TableCell>Spottings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotspots.slice(0, 10).map((hotspot, i) => (
          <TableRow key={i}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{hotspot.city}, {hotspot.state}</TableCell>
            <TableCell>{hotspot.spottings}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Hotspots;
