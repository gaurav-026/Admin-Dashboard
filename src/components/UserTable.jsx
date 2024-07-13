import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';

const columns = [
  {
    id: 'expand',
    label: '',
    minWidth: 50
  },
  {
    id: 'user_id',
    label: 'User Id',
    minWidth: 100
  },
  {
    id: 'user_name',
    label: 'User Name',
    minWidth: 100,
    // align: 'right',
  },
  {
    id: 'name',
    label: 'Name',
    minWidth: 100,
    // align: 'right',
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 100,
    // align: 'right',
  },
];

function createData(user_id, user_name, name, email) {
  return { user_id, user_name, name, email };
}

const rows = [
  createData('123456', 'jdoe', 'John Doe', 'jdoe@example.com'),
  createData('123457', 'asmith', 'Alice Smith', 'asmith@example.com'),
  createData('123458', 'bwhite', 'Bob White', 'bwhite@example.com'),
  createData('123459', 'cmiller', 'Carol Miller', 'cmiller@example.com'),
  createData('123460', 'djohnson', 'David Johnson', 'djohnson@example.com'),
  createData('123461', 'emartin', 'Emma Martin', 'emartin@example.com'),
  createData('123462', 'flee', 'Frank Lee', 'flee@example.com'),
  createData('123463', 'ggarcia', 'Grace Garcia', 'ggarcia@example.com'),
  createData('123464', 'hrodriguez', 'Hannah Rodriguez', 'hrodriguez@example.com'),
  createData('123465', 'ijones', 'Isaac Jones', 'ijones@example.com'),
  createData('123466', 'jwilson', 'Julia Wilson', 'jwilson@example.com'),
  createData('123467', 'kthomas', 'Kevin Thomas', 'kthomas@example.com'),
  createData('123468', 'lmoore', 'Laura Moore', 'lmoore@example.com'),
  createData('123469', 'mking', 'Michael King', 'mking@example.com'),
  createData('123470', 'nwright', 'Nancy Wright', 'nwright@example.com'),
  createData('123471', 'operez', 'Oscar Perez', 'operez@example.com'),
  createData('123472', 'qmartinez', 'Quincy Martinez', 'qmartinez@example.com'),
  createData('123473', 'rlopez', 'Rachel Lopez', 'rlopez@example.com'),
  createData('123474', 'sscott', 'Sam Scott', 'sscott@example.com'),
  createData('123475', 'tclark', 'Tina Clark', 'tclark@example.com'),
];

export default function UserTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.user_id}>
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                    //   onClick={() => setOpen(!open)}
                    >
                      {<MoreHorizIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.user_id}</TableCell>
                  <TableCell align='left'>{row.user_name}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
