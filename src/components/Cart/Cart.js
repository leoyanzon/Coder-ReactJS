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
import CartForm from './CartForm';

export default function Cart() {
  const { listadoCarrito, removeItem, totalAmount, countAmount} = useContext(CartContext);


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
  
  useEffect(()=>{
    countAmount();
  },[listadoCarrito]);

  return (
    <>
      { listadoCarrito.length > 0 &&

    <div className ="table">
                  <h1>Estás a un paso de finalizar tu compra!</h1>
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
    <h3>El monto total del carrito es de: ${totalAmount}</h3>
    <CartForm></CartForm>
    </div>
    }
    { listadoCarrito.length === 0 &&
    <>

      <h1>No hay ningun item en el carrito</h1>
      <img src="https://imgs.search.brave.com/3rpIHozptXxhuHNUBssJnCje8bQ9C3rMJLtleUE7__8/rs:fit:840:1022:1/g:ce/aHR0cHM6Ly93d3cu/cG5nZmluZC5jb20v/cG5ncy9tLzEyOS0x/Mjk5NzA3X3Nob3Bw/aW5nLWNhcnQtcG5n/LWNsaXAtYXJ0LWlt/YWdlLXNob3BwaW5n/LWNhcnQucG5n" alt="Empty cart" width="210" height="255">
      </img>
      <NavLink to="/">
        <button className = "button1">Ir al inicio</button>
      </NavLink>
    </>
    }
    </>
  )
}