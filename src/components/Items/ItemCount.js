import {useEffect, useState} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { useContext } from "react"

export const ItemCount = ({initial, producto}) => {

    const [onAdd, setOnAdd] = useState(initial);  
    const [seleccionTemporal, setSeleccionTemporal] = useState([]);
    const {addProducto, recuperaStockCarrito} = useContext(CartContext);

    const [maxStock, setMaxStock] = useState(producto.stock);

    const agregarProducto = (producto) => {
        const newItem = [producto];
        setSeleccionTemporal(newItem);

    }

    const removerProducto = () => {
        setSeleccionTemporal([]);
    }

    const finalizarCompra = ([seleccionTemporal]) =>{
        const newProduct = {...seleccionTemporal, quantity: onAdd}
        addProducto(newProduct);
    }

    useEffect(()=>{
        const newStock = producto.stock - recuperaStockCarrito(producto.id);
        setMaxStock(newStock);
    },[producto]);

    return (
        <div style={styles.itemCount}>
            <h2>Max Stock: {maxStock}</h2>
            <p>{onAdd}</p>

            <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                <button className = "button1" onClick = {()=> onAdd > 0 ? setOnAdd(onAdd-1): false} >-</button>
                <button className = "button1" onClick = {()=> setOnAdd(maxStock)} >Max</button>
                <button className = "button1" onClick = {()=> onAdd < maxStock ? setOnAdd(onAdd+1): false} >+</button>
            </ButtonGroup>

            {   seleccionTemporal.length == 0 && 
                <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                    <button className = "button1" onClick = {()=> agregarProducto(producto)}>Agregar a carrito</button>
                </ButtonGroup>
            }
            
            {   seleccionTemporal.length > 0 &&
                <>
                <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                    <button className = "button1" onClick = {()=> removerProducto()}>Remover producto</button>
                </ButtonGroup>
                <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                    <NavLink to="/cart">
                        <button onClick = {()=> finalizarCompra(seleccionTemporal)} className = "button1">Confirmar producto</button>
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