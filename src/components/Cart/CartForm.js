import React, {useState, useContext} from 'react'
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import {CartContext} from "../../context/CartContext";
import { collection, addDoc } from 'firebase/firestore';
import db from "../../utils/firebase";

function CartForm(props) {
    const { listadoCarrito, cleanCarrito, totalAmount, reducirStockBatch } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const orderCollection = collection(db, "orders");

    const sendForm = (e) => {
        e.preventDefault();
        const user = {
            name: e.target[0].value,
            lastname: e.target[2].value,
            email: e.target[4].value
        }
        const _order = {
            cart: listadoCarrito,
            user: user,
            total: totalAmount

        }
        console.log(_order);

        addDoc(orderCollection, _order).then(
            (id) => {
                setOrderId(id.id);
                console.log("Registro exitoso con id:", id.id);
                cleanCarrito();
            }
        )
        reducirStockBatch();
    };

  return (
    <div className = "cartForm">
    <h2>Finalizá la compra completando tus datos</h2>

    <form onSubmit={sendForm}>
        <div>
        <TextField
          className="inputForm"
          required
          id="name"
          label="Name"
          defaultValue=""
        />
        <TextField
          className="inputForm"
          required
          id="last-name"
          label="Last Name"
          defaultValue=""
        />
        <TextField
          className="inputForm"
          required
          id="email"
          label="Email"
          defaultValue=""
        />
        </div>
        <button type="submit" className = "button1">Comprar</button>
    </form>
    </div>
    
  )
}

export default CartForm
