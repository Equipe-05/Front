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

  useEffect(() => {
    SelectFranchises();
  }, []);

  return (
    <TableContainer component={Paper}>
      <DivTableFranchise>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Franquia</StyledTableCell>
              <StyledTableCell align="right">CNPJ</StyledTableCell>
              <StyledTableCell align="right">Telefone</StyledTableCell>
              <StyledTableCell align="right">Endereço</StyledTableCell>
              {(() => {
                if (userRole == "OPERATOR") {
                  return (
                    <div>
                      <StyledTableCell align="right">
                        Vincular Usuario
                      </StyledTableCell>
                      <StyledTableCell align="right">Vendas</StyledTableCell>
                    </div>
                  );
                }
              })()}
              {(() => {
                if (userRole == "MANAGER") {
                  return (
                    <div>
                      <StyledTableCell align="right">Vendas</StyledTableCell>
                    </div>
                  );
                }
              })()}
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
                {(() => {
                  if (userRole == "OPERATOR") {
                    return (
                      <div>
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
                              onClick={() => HandleClick(franchise.id)}
                              variant="outlined"
                            >
                              Vendas
                            </Button>
                          }
                        </StyledTableCell>
                      </div>
                    );
                  }
                })()}
                {(() => {
                  if (userRole == "MANAGER") {
                    return (
                      <div>
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
                      </div>
                    );
                  }
                })()}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTableFranchise>
    </TableContainer>
  );
}
