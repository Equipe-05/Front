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
import {
  PatchFranchiseByUserId,
  UpdateFranchise,
  UserFranchise,
} from "../../utils/types/requests";
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

export function TableUserFranchise() {
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();
  const classes = useStyles();
  const [userFranchises, setUserFranchises] = useState<UserFranchise[]>([]);

  async function SelectUserFranchises() {
    const result = await api.getAllUsersFranchise();
    setUserFranchises(result);
  }

  async function HandleClick(id: string) {
    const franchiseIdLocal = localStorage.getItem("franchiseId");

    const franchiseByUserId: PatchFranchiseByUserId = {
      userId: id,
      franchiseId: franchiseIdLocal,
    };

    const resultByUser = await api.patchFranchiseByUserId(franchiseByUserId);
  }

  useEffect(() => {
    SelectUserFranchises();
  }, []);

  return (
    <TableContainer component={Paper} style={{width: "auto"}}>
      <DivTableFranchise>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}>Nome</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}align="right">Email</StyledTableCell>
              <StyledTableCell style={{backgroundColor:"#E36C0B"}}align="right">Vincular</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userFranchises.map((userFranchise) => (
              <StyledTableRow key={userFranchise.id}>
                <StyledTableCell component="th" scope="row">
                  {userFranchise.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {userFranchise.email}
                </StyledTableCell>

                <StyledTableCell>
                  {
                    <Button
                      onClick={() => HandleClick(userFranchise.id)}
                      variant="outlined"
                    >
                      Vincular
                    </Button>
                  }
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </DivTableFranchise>
    </TableContainer>
  );
}
