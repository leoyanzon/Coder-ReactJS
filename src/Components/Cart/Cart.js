import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Cart() {
  const { listadoCarrito, removeItem, totalAmount} = useContext(CartContext);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

  return (
    <>

      {/* {
        listadoCarrito.map((item, index )=> {
          return(
          <p key={index}>{item.title}</p>
        )})
      } */}
      { listadoCarrito.length > 0 &&

    <div className ="table">
                  <h1>Felicitaciones, has comprado un producto!</h1>
            <h2>Tu carrito:</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Remove</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listadoCarrito.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={()=> removeItem(row)} className = "button1">
                <DeleteOutlineIcon></DeleteOutlineIcon>
                  </button>
              
            </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    <h2>El total es de: {totalAmount}</h2>
    </div>
    }
    { listadoCarrito.length == 0 &&
    <>

      <h1>No hay items en el carrito</h1>
      <NavLink to="/">
        <h2>Ir al inicio</h2>
      </NavLink>
    </>
    }
      
    </>

  )
}