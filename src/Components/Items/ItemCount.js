import {useState} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom';

export const ItemCount = ({initial, stock, id}) => {

    const [onAdd, setOnAdd] = useState(initial);  
    const [productoAgregado, setProductoAgregado] = useState(0);

    const agregarProducto = (id) => {
        setProductoAgregado(id);
    }

    return (
        <div style={styles.itemCount}>
            <h2>Max Stock: {stock}</h2>
            <p>{onAdd}</p>

            <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                <button className = "button1" onClick = {()=> onAdd > 0 ? setOnAdd(onAdd-1): false} >-</button>
                <button className = "button1" onClick = {()=> setOnAdd(stock)} >Max</button>
                <button className = "button1" onClick = {()=> onAdd < stock ? setOnAdd(onAdd+1): false} >+</button>
            </ButtonGroup>

            {   productoAgregado == 0 && 
                <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                    <button className = "button1" onClick = {()=> agregarProducto(id)}>Agregar a carrito</button>
                </ButtonGroup>
            }
            
            {   productoAgregado > 0 &&
                <>
                <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                    <button className = "button1" onClick = {()=> agregarProducto(0)}>Remover producto</button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                    <NavLink to="/cart">
                        <button className = "button1">Finalizar Compra</button>
                    </NavLink>
                </ButtonGroup>
                </>
            }    
        </div>

    )
}

const styles = {
    itemCount: {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        color: "blue",
        margin:"5px"
    },
    buttons: {
        padding: "0px"
    }
}