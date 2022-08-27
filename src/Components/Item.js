export const Item = ({item}) => {
    const {id , title, price, pictureUrl} = item;
    return(
        <div className = "Item">
        <h2>{id} - {title}</h2>
        <p>Precio: {price} USD</p>
        <img src={pictureUrl} alt="" className = "ItemImg"></img>
        </div>
    )
}