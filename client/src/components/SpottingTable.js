import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@material-ui/core'

function SpottingTable({ spottings }) {

  return (
    <div>
      <Typography className="title" variant='h5'>Spottings</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Dog</TableCell>
          <TableCell>Breed</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Zip Code</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {spottings.map((s, i) => (
        <TableRow key={i}>
            <TableCell>{s.dog}</TableCell>
            <TableCell>{s.breed}</TableCell>
            <TableCell><img width="25px" src={s.image_url}/></TableCell>
            <TableCell>{s.zip_code}</TableCell>
        </TableRow>
        ))}
      </TableBody>
      </Table>
      </div>
  );
}

export default SpottingTable;
