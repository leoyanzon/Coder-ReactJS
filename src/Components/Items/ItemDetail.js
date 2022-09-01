export const ItemDetail = ({id, title, price, pictureUrl}) => {
    return(
        <>
            { id > 0 && 
            <div>
                <h1>Producto número {id}</h1>
                <h2>{title}</h2>
                <img src={pictureUrl} alt="" />
                <p>Precio: {price}</p>
            </div>
            }
        </>
    )
}