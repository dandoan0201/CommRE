import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReturnAnArray from './data';

const array = ReturnAnArray();
const tableArray = [];

for (var item of array) {
    // check to see if exist
    if(!(tableArray.some(x => x.agent === item.agent))) {
        var obj = {};
        obj['agent'] = item.agent;
        obj['sale'] = 1;
        tableArray.push(obj);
    } else {
        for (var itemTable of tableArray) {
            if (itemTable.agent === item.agent) {
                itemTable['sale']++;
            }
        }
    }
}


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Agent</strong></TableCell>
            <TableCell><strong>Sales</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {tableArray.map((row) => (
                <TableRow>
                    <TableCell>
                        {row.agent}
                    </TableCell>
                    <TableCell>
                        {row.sale}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
