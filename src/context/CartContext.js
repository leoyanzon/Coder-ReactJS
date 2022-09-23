import { createContext } from "react";
import { baseDeDatosFile} from "./baseDatos"
import { useState } from "react"
import { doc, getDoc, query, updateDoc } from 'firebase/firestore';
import db from "../utils/firebase";
import { async, map } from "@firebase/util";

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
        countAmount();
        countItems();
    }

    const reducirStockBatch = () => {
        listadoCarrito.map(it => {
            reducirStockFirebase(it, it.quantity);
        })
    }

    const reducirStockFirebase = async(productoToFind, quantity) => {
        const index = productoToFind.id;
        const queryRef = doc(db, "items", String(index));
        const queryDoc = await getDoc(queryRef);
        const newStock = queryDoc.data();
        newStock.stock -= quantity;
        updateDoc(queryRef, newStock).then(()=> console.log("producto Actualizado"));
    }

    const removeItem = (producto) => {
        const index = findIndex(listadoCarrito, producto);
        if (index != -1){
            const filtered = listadoCarrito.filter(function(value, item, arr){ 
                return item != index;
            });
            setlistadoCarrito(filtered);
        }
        countAmount();
        countItems();
    }

    const cleanCarrito = () => {
        setlistadoCarrito([]);
        countAmount();
        countItems();
    }

    const recuperaStockCarrito = (_id) => {
        let stock = listadoCarrito.find(element => element.id === _id) || 0;
        stock = stock !== 0 ? stock.quantity : 0;
        return stock
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
        <CartContext.Provider value={{baseDeDatos, listadoCarrito, totalItems, totalAmount, addProducto, removeItem, countAmount, countItems, cleanCarrito, recuperaStockCarrito, reducirStockBatch}}>
            {children}
        </CartContext.Provider>
    )
}