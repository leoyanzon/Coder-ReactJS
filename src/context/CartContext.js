import { createContext } from "react";
import { baseDeDatos} from "./baseDatos"
import { useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    // const productosDB = baseDeDatos;

    const [listadoCarrito, setlistadoCarrito] = useState([]);

    const addProducto = (producto) => {
        if (checkRepetido(producto) != -1){
            const newList = listadoCarrito[checkRepetido(producto)]
            
            //setlistadoCarrito(newList);
            console.log(newList)
        } else {
            const newList = [...listadoCarrito, producto];
            setlistadoCarrito(newList);
            console.log(newList)
        }
        
    }

    // const removeItem = (id) => {

    // }

    const checkRepetido = (producto) => {
        return listadoCarrito.findIndex(element=> element.id == producto.id);
    }

    return(
        <CartContext.Provider value={{listadoCarrito: listadoCarrito, addProducto}}>
            {children}
        </CartContext.Provider>
    )
}