import React, { useEffect, useState } from "react";
import { Sale, UpdateFranchise } from "../../utils/types/requests";
import { api } from "../../utils/api/api";
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

export function TableSale() {
  const classes = useStyles();
  const [Sales, setSales] = useState<Sale[]>([]);
  const id = localStorage.getItem("franchiseId");

  async function SelectSales(id: string) {
    const result = await api.getFranchiseSaleById(id);
    result == null ? "" : setSales(result);
    console.log(result);
  }

  useEffect(() => {
    SelectSales(String(id));
  }, []);

  return (
    <TableContainer component={Paper}>
      <DivTable>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell align="right">ID Cliente</StyledTableCell>
              <StyledTableCell align="right">ID Franquia</StyledTableCell>
              <StyledTableCell align="right">ID Produto</StyledTableCell>
              <StyledTableCell align="right">ID Usuário</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Sales.map((sale) => (
              <StyledTableRow key={sale.id}>
                <StyledTableCell component="th" scope="row">
                  {sale.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {sale.customerId}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {sale.franchiseId}
                </StyledTableCell>
                <StyledTableCell align="right">{sale.userId}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTable>
    </TableContainer>
  );
}
