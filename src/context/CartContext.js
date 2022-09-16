import { createContext } from "react";
import { baseDeDatosFile} from "./baseDatos"
import { useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [baseDeDatos, setBaseDeDatos] = useState(baseDeDatosFile);
    const [listadoCarrito, setlistadoCarrito] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

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
        countAmount();
        countItems();
    }

    const reducirStock = (productoToFind, quantity) => {
        const index = findIndex(baseDeDatos, productoToFind);
        console.log("base de datos antes de resta", baseDeDatos);
        const reducirStockList = [...baseDeDatos]; // temporal de base de datos original
        console.log("reducirStockList variable temporal antes", reducirStockList);
        reducirStockList[index].stock = reducirStockList[index].stock - quantity; // resta SOBRE la temporal
        console.log("reducirStockList variable temporal despues de resta", reducirStockList);
        setBaseDeDatos(reducirStockList);
        console.log("base de datos despues de resta", baseDeDatos);
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
        countAmount();
        countItems();
    }

    const countAmount = () => {
        const reduceFn = (total, currentItem) => {
            return total += currentItem.quantity * currentItem.price;
        }
        const amountTemp = listadoCarrito.reduce(reduceFn, 0);
        setTotalAmount(amountTemp);
    }

    const countItems = () => {
        const reduceFn = (total, currentItem) => {
            return total += currentItem.quantity;
        }
        const countTemp = listadoCarrito.reduce(reduceFn, 0);
        setTotalItems(countTemp);
    }

    const findIndex = (array, itemToFind) => {
        return array.findIndex(element=> element.id == itemToFind.id);
    }

    return(
        <CartContext.Provider value={{baseDeDatos, listadoCarrito, totalItems, totalAmount, addProducto, removeItem, countAmount, countItems}}>
            {children}
        </CartContext.Provider>
    )
}