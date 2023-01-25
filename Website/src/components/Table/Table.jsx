import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, queryId, date, status) {
  return { name, queryId, date, status };
}

const rows = [
  createData("What sort of camera does the drone use?", 18908426, "25 January 2023", "Answered"),
  createData("direct hard drop on floor?", 18908425, "25 January 2023", "Redirected"),
  createData("What is the colour of the drone?", 18908424, "25 January 2023", "Answered"),
  createData("How long does the drone last for?", 18908423, "25 January 2023", "Answered"),
];


const makeStyle=(status)=>{
  if(status === 'Answered')
  {
    return {
      background: 'rgb(143 250 158 / 80%)',
      color: 'green',
    }
  }
  else if(status === 'Redirected')
  {
    return{
      background: '#ffadad8e',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {

  return (
      <div className="Table">
      <h3>Recent Activities</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029"}}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Queries</TableCell>
                <TableCell align="left">Query ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">&nbsp;&nbsp;&nbsp;&nbsp;Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.queryId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
