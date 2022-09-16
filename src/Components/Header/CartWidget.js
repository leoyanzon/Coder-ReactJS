import React, { useContext, useEffect } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const Carrito = () =>{

    const {totalItems} = useContext(CartContext);

    return(

        <div>
            <NavLink to="/cart">
                <ShoppingCartIcon fontSize="large" className="cart"/>
            {
                totalItems > 0 && <p className="cart">{totalItems}</p>
            }
            </NavLink>
        
        </div>
    )
}

export default Carrito