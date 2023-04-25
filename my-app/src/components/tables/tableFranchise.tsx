import React, { useEffect, useState } from 'react'
import { UpdateFranchise } from "../../utils/types/requests"
import { api } from '../../utils/api/api';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export function TableFranchise() {
    const classes = useStyles();
    const [franchises, setFranchises] = useState<UpdateFranchise[]>([])

    async function SelectFranchises() {
        const result = await api.getAllFranchise()
        setFranchises(result)
    }

    useEffect(() => {
        SelectFranchises();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Franquia</StyledTableCell>
                        <StyledTableCell align="right">CNPJ</StyledTableCell>
                        <StyledTableCell align="right">Telefone</StyledTableCell>
                        <StyledTableCell align="right">Endereço</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {franchises.map((franchise) => (
                        <StyledTableRow key={franchise.id}>
                            <StyledTableCell component="th" scope="row">
                                {franchise.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{franchise.cnpj}</StyledTableCell>
                            <StyledTableCell align="right">{franchise.phone}</StyledTableCell>
                            <StyledTableCell align="right">{franchise.address}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
