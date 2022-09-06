export const ItemDetail = ({producto}) => {

    return(
        <div>
            <h1>Producto número {producto.id}</h1>
            <h2>{producto.title}</h2>
            <img src={producto.pictureUrl} alt='' />
            <p>Precio: {producto.price}</p>
            </div>                
    )
}