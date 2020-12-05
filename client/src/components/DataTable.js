import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

function DataTable({ columns, data }) {

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((c) => <TableCell key={c}>{c}</TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d, i) => (
        <TableRow key={i}>
          {Object.keys(d).map((c) => <TableCell key={c}>{d[c]}</TableCell>)}
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DataTable;
