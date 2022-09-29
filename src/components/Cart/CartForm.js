import React, {useState, useContext, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {CartContext} from "../../context/CartContext";
import { collection, addDoc } from 'firebase/firestore';
import db from "../../utils/firebase";
import swal from "sweetalert";

function CartForm(props) {
    const { listadoCarrito, cleanCarrito, totalAmount, reducirStockBatch } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");
    const [isValid, setIsValid] = useState({name: 0, lastName: 0, email:0});

    const orderCollection = collection(db, "orders");

    const handleChange = (e) => {
      const targetValue = e.target.value;
      const targetId = e.target.id;
      let validity = 0;
      if (targetId === "email"){
          validity = targetValue.search("@")>0 && targetValue !== "";
      } else {
          validity = targetValue !== "";
      }
      const newObject = {...isValid, [targetId]:validity};
      setIsValid(newObject);
    }

    const sendForm = async(e) => {
      e.preventDefault();
      const validity = isValid.name && isValid.lastName && isValid.email;
      if (validity){
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
        await addDoc(orderCollection, _order).then(
            (id) => {
                setOrderId(id.id);
                swal({
                  title: "Felicitaciones!",
                  text: `Tu compra fue exitosa, con el id ${id.id}`,
                  icon: "success",
                });
            }
        )
        reducirStockBatch();
        cleanCarrito();
      } else {
        swal({
          title: "Alerta",
          text: `Faltan completar datos!`,
          icon: "error",
        });
      }
    };

  return (
    <div className = "cartForm">
    <h2>Finalizá la compra completando tus datos</h2>

    <form onSubmit={sendForm}>
        <div>
        <TextField
          className="inputForm"
          error = {!isValid.name}
          id="name"
          label="Name"
          defaultValue=""
          onChange={handleChange}
        />
        <TextField
          className="inputForm"
          error = {!isValid.lastName}
          id="lastName"
          label="Last Name"
          defaultValue=""
          onChange={handleChange}
        />
        <TextField
          className="inputForm"
          error = {!isValid.email} 
          id="email"
          label="Email"
          defaultValue=""
          onChange={handleChange}
        />
        </div>
        <button type="submit" className = "button1">Realizar compra</button>
    </form>
    </div>
    
  )
}

export default CartForm
