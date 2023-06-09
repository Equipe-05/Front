import React, { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import { UpdateCustomer } from "../../utils/types/requests";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { DivTable } from "./tableStyle";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function TableCustomer() {
  const classes = useStyles();
  const [customers, setCustomers] = useState<UpdateCustomer[]>([]);

  async function SelectCustomer() {
    const result = await api.getAllCustomer();
    setCustomers(result);
  }

  useEffect(() => {
    SelectCustomer();
  }, []);

  return (
    <TableContainer component={Paper} style={{width: "auto"}}>
      <DivTable style={{margin: 0, width: "100%"}}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}>Cliente</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}align="right">CNPJ</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}align="right">Telefone</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}align="right">Endereço</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <StyledTableRow key={customer.id}>
                <StyledTableCell component="th" scope="row">
                  {customer.name}
                </StyledTableCell>
                <StyledTableCell align="right">{customer.cnpj}</StyledTableCell>
                <StyledTableCell align="right">
                  {customer.phone}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {customer.address}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTable>
    </TableContainer>
  );
}
