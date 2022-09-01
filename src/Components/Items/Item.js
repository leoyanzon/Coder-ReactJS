export const Item = ({item}) => {
    const {id , title, price, pictureUrl} = item;

    const abrirDetalles = (id) => {
        console.log(id)
    }

    return(
        <div className = "Item">
        <h2>{id} - {title}</h2>
        <p>Precio: {price} USD</p>
        <img src={pictureUrl} alt="" className = "ItemImg"></img>
        <button onClick={()=> {abrirDetalles(id)}} className = "button" >Ver detalles</button> 
        </div>
    )
}
