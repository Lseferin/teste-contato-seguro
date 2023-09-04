import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Content} from './styles';

export default function FormTableUsers({usersList, filter}) {
  const userListFiltered = filter ? usersList.filter((user) => user.name.toLowerCase().includes(filter)) : usersList;
  return (

    <Content>
      <TableContainer component={Paper}>      
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">E-mail</TableCell>
              <TableCell align="right">Telefone</TableCell>
              <TableCell align="right">Nascimento</TableCell>
              <TableCell align="right">Cidade</TableCell>
              <TableCell align="right">Empresa</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {userListFiltered.map((info) => (
              <TableRow
                key={info.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {info.name}
                </TableCell>
                <TableCell align="right">{info.email}</TableCell>
                <TableCell align="right">{info.phone}</TableCell>
                <TableCell align="right">{info.dateOfBirth}</TableCell>
                <TableCell align="right">{info.cityOfBirth}</TableCell>                
                <TableCell align="right">{info.company}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>    
  );
}