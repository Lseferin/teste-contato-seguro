import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Content } from './styles';

export default function FormTableCompanies({companiesList, filter}) {
  const companyListFiltered = filter ? companiesList.filter((company) => company.name.toLowerCase().includes(filter.toLowerCase())) : companiesList;
  return (

    <Content>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">CNPJ</TableCell>
              <TableCell align="right">Endereço</TableCell>
              <TableCell align="right">Usuários</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {companyListFiltered.map((info) => (
              <TableRow
                key={info.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {info.name}
                </TableCell>
                <TableCell align="right">{info.cnpj}</TableCell>
                <TableCell align="right">{info.address}</TableCell>
                <TableCell align="right">{info.users}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Content>    
  );
}