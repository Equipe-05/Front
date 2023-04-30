import React, { useEffect, useState } from "react";
import { api } from "../../utils/api/api";
import {
  AllProduct,
  CreateProduct,
  UpdateCustomer,
  UpdateProduct,
} from "../../utils/types/requests";
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

export function TableProduct() {
  const classes = useStyles();
  const [Products, setProducts] = useState<AllProduct[]>([]);

  async function SelectProduct() {
    const result = await api.getAllProducts();
    setProducts(result);
  }

  useEffect(() => {
    SelectProduct();
  }, []);

  return (
    <TableContainer component={Paper}>
      <DivTable>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Produto</StyledTableCell>
              <StyledTableCell align="right">Descrição</StyledTableCell>
              <StyledTableCell align="right">Plano</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Products.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="row">
                  {product.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {product.description}
                </StyledTableCell>
                <StyledTableCell align="right">{product.plan}</StyledTableCell>
                <StyledTableCell align="right">{product.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTable>
    </TableContainer>
  );
}
