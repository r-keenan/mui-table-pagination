import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import rowsData from "../dessertsData.json";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function PaginatedTable({ columns }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const rows = rowsData.desserts;

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow key={Math.random() * 100}>
            <TableCell style={{ fontWeight: "bold" }}>
              {columns.slice(0, 1)}
            </TableCell>
            {columns.slice(1).map((columnName) => (
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                {columnName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.itemId}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" id={row}>
                  {row.calories}
                </TableCell>
                <TableCell align="right" id={row}>
                  {row.fat}
                </TableCell>
                <TableCell align="right" id={row}>
                  {row.carbs}
                </TableCell>
                <TableCell align="right" id={row}>
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          {emptyRows > 0 && (
            <TableRow
              style={{ height: 53 * emptyRows }}
              key={Math.random() * 100}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default PaginatedTable;
