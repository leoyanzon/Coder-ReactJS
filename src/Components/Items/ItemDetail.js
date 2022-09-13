import {ItemCount} from './ItemCount'

export const ItemDetail = ({producto}) => {

    return(
        <div className = "itemDetail">
            <h1>Producto número {producto.id}</h1>
            <h2>{producto.title}</h2>
            <img className = "itemDetailPic" src={producto.pictureUrl} alt='' />
            <p>Precio: {producto.price}</p>
            <ItemCount initial = {0} producto={producto}></ItemCount>
        </div>                
    )
}