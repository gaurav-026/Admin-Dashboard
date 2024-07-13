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
    id: 'post_id',
    label: 'Post Id',
    minWidth: 100
  },
  {
    id: 'post_caption',
    label: 'Post Caption',
    minWidth: 200,
    // align: 'right',
  },
  {
    id: 'media_url',
    label: 'Media URL',
    minWidth: 100,
    // align: 'right',
  },
];

function createData(post_id, post_caption, media_url) {
  return { post_id, post_caption, media_url };
}

const rows = [
  createData('123456', 'Lovely sunset at the beach', 'http://example.com/media1.jpg'),
  createData('123457', 'Delicious homemade pizza', 'http://example.com/media2.jpg'),
  createData('123458', 'Hiking adventures in the mountains', 'http://example.com/media3.jpg'),
  createData('123459', 'City skyline at night', 'http://example.com/media4.jpg'),
  createData('123460', 'Relaxing by the pool', 'http://example.com/media5.jpg'),
  createData('123461', 'Coffee time!', 'http://example.com/media6.jpg'),
  createData('123462', 'Road trip to the countryside', 'http://example.com/media7.jpg'),
  createData('123463', 'Family BBQ', 'http://example.com/media8.jpg'),
  createData('123464', 'Morning run in the park', 'http://example.com/media9.jpg'),
  createData('123465', 'Birthday celebration', 'http://example.com/media10.jpg'),
  createData('123466', 'Exploring the old town', 'http://example.com/media11.jpg'),
  createData('123467', 'Beautiful autumn leaves', 'http://example.com/media12.jpg'),
  createData('123468', 'Art exhibition visit', 'http://example.com/media13.jpg'),
  createData('123469', 'Delicious sushi dinner', 'http://example.com/media14.jpg'),
  createData('123470', 'Watching the sunset', 'http://example.com/media15.jpg'),
  createData('123471', 'Gardening on a sunny day', 'http://example.com/media16.jpg'),
  createData('123472', 'Beach volleyball game', 'http://example.com/media17.jpg'),
  createData('123473', 'Evening walk with the dog', 'http://example.com/media18.jpg'),
  createData('123474', 'Visiting the museum', 'http://example.com/media19.jpg'),
  createData('123475', 'Cooking a new recipe', 'http://example.com/media20.jpg'),
];

export default function PostTable() {
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
                  <TableCell>{row.post_id}</TableCell>
                  <TableCell align='left'>{row.post_caption}</TableCell>
                  <TableCell align="left">{row.media_url}</TableCell>

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
