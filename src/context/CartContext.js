import { createContext } from "react";
import { baseDeDatosFile} from "./baseDatos"
import { useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [baseDeDatos, setBaseDeDatos] = useState(baseDeDatosFile);
    const [listadoCarrito, setlistadoCarrito] = useState([]);
    const addProducto = (producto) => {
        const index = findIndex(listadoCarrito, producto);
        if (index === -1){
            const newList = [...listadoCarrito, producto];
            setlistadoCarrito(newList);
        } else {
            const newList = [...listadoCarrito];
            newList[index].quantity = newList[index].quantity + producto.quantity;
            setlistadoCarrito(newList);
        }
        reducirStock(producto, producto.quantity);
    }

    const reducirStock = (productoToFind, quantity) => {
        const index = findIndex(baseDeDatos, productoToFind);
        const reducirStockList = [...baseDeDatos]; // temporal de base de datos original
        reducirStockList[index].stock = reducirStockList[index].stock - quantity; // resta SOBRE la temporal
        setBaseDeDatos(reducirStockList);
    }

    const recuperaStock = (productoToFind, quantityRecoup) => {
        const index = findIndex(baseDeDatos, productoToFind);
        const recuperaStockList = [...baseDeDatos]; // temporal de base de datos original
        recuperaStockList[index].stock = recuperaStockList[index].stock + quantityRecoup; // resta SOBRE la temporal
        setBaseDeDatos(recuperaStockList);
    }

    const removeItem = (producto) => {
        const index = findIndex(listadoCarrito, producto);
        if (index != -1){
            const filtered = listadoCarrito.filter(function(value, item, arr){ 
                return item != index;
            });
            setlistadoCarrito(filtered);
        }
        recuperaStock(producto, producto.quantity);

    }

    const findIndex = (array, itemToFind) => {
        return array.findIndex(element=> element.id == itemToFind.id);
    }

    return(
        <CartContext.Provider value={{baseDeDatos:baseDeDatos, listadoCarrito: listadoCarrito, addProducto, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}