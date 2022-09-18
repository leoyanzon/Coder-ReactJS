import { NavLink } from "react-router-dom";
import { useState } from 'react'

export const Item = ({item}) => {
    const {id , title, price, pictureUrl} = item;

    const [selectedId, setSelectedId] = useState(0);


    const abrirDetalles = (id) => {
        setSelectedId(id);
    }

    return(
            <div className = "Item">
            <h2>{id} - {title}</h2>
            <p>Precio: {price} USD</p>
            <img src={pictureUrl} alt="" className = "ItemImg"></img>
            <NavLink to = {`/item/${id}`}>
                <button onClick={()=> {abrirDetalles(id)}} className = "button1" >Ver detalles</button> 
            </NavLink>       
            </div>
    )
}
