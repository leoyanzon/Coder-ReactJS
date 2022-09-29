import { NavLink } from "react-router-dom";

export const Item = ({item}) => {
    const {id , title, price, pictureUrl} = item;

    return(
            <div className = "Item">
            <h2>{id} - {title}</h2>
            <p>Precio: {price} ARS</p>
            <img src={pictureUrl} alt="" className = "ItemImg"></img>
            <NavLink to = {`/item/${id}`}>
                <button className = "button1" >Ver detalles</button> 
            </NavLink>       
            </div>
    )
}
