import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { DivTableFranchise } from "./tableFranchiseStyle";
import { UpdateFranchise } from "../../utils/types/requests";
import { api } from "../../utils/api/api";

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

export function TableFranchise() {
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();
  const classes = useStyles();
  const [franchises, setFranchises] = useState<UpdateFranchise[]>([]);

  async function SelectFranchises() {
    const result = await api.getAllFranchise();
    setFranchises(result);
  }

  async function HandleClick(id: string) {
    localStorage.setItem("franchiseId", id);
    navigate("/sale/franchise/" + id);
  }

  async function HandleClickUser(id: string) {
    localStorage.setItem("franchiseId", id);
    navigate("/user-franchise/" + id);
  }

  async function HandleClickCustomer(id: string) {
    localStorage.setItem("franchiseId", id);
    navigate("/create-customer");
  }

  useEffect(() => {
    SelectFranchises();
  }, []);

  return (
    <TableContainer component={Paper} style={{ width: "auto" }}>
      <DivTableFranchise style={{ margin: 0, width: "100%" }}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead style={{ width: "100%" }}>
            <TableRow>
              <StyledTableCell style={{ backgroundColor: "#E36C0B" }}>Franquia</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">CNPJ</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Telefone</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Endereço</StyledTableCell>
              {userRole == "OPERATOR" &&
                <>
                  <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Vincular Usuario</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Clientes</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Vendas</StyledTableCell>
                </>}
              {userRole == "FRANCHISE" &&
                <>
                  <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Cadastrar Cliente</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Vendas</StyledTableCell>
                </>}
              {userRole == "MANAGER" &&
                <StyledTableCell style={{ backgroundColor: "#E36C0B" }} align="right">Vendas</StyledTableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {franchises.map((franchise) => (
              <StyledTableRow key={franchise.id}>
                <StyledTableCell component="th" scope="row">
                  {franchise.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {franchise.cnpj}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {franchise.phone}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {franchise.address}
                </StyledTableCell>
                {userRole == "OPERATOR" &&
                  <>
                    <StyledTableCell>
                      {
                        <Button
                          onClick={() => HandleClickUser(franchise.id)}
                          variant="outlined"
                        >
                          Vincular Usuario
                        </Button>
                      }
                    </StyledTableCell>
                    <StyledTableCell>
                      {
                        <Button
                          onClick={() => HandleClickCustomer(franchise.id)}
                          variant="outlined"
                        >
                          Cadastrar Cliente
                        </Button>
                      }
                    </StyledTableCell>
                    <StyledTableCell>
                      {
                        <Button
                          onClick={() => HandleClick(franchise.id)}
                          variant="outlined"
                        >
                          Vendas
                        </Button>
                      }
                    </StyledTableCell>
                  </>}
                {userRole == "FRANCHISE" &&
                  <>
                    <StyledTableCell>
                      {
                        <Button
                          onClick={() => HandleClickCustomer(franchise.id)}
                          variant="outlined"
                        >
                          Cadastrar Cliente
                        </Button>
                      }
                    </StyledTableCell>
                    <StyledTableCell>
                      {
                        <Button
                          onClick={() => HandleClick(franchise.id)}
                          variant="outlined"
                        >
                          Vendas
                        </Button>
                      }
                    </StyledTableCell>
                  </>}
                {userRole == "MANAGER" &&
                  <>
                    <StyledTableCell>
                          {
                            <Button
                              onClick={() => HandleClick(franchise.id)}
                              variant="outlined"
                            >
                              Vendas
                            </Button>
                          }
                        </StyledTableCell>
                  </>}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTableFranchise>
    </TableContainer >
  );
}
