import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from 'react';

export const ItemDetailContainer = ({prodId}) => {
    
    const [producto, setProducto] = useState(0);

    useEffect(()=>{
        const seleccionProducto = () => {
            setTimeout(()=>{
                cambiarProducto();             
                }, 2000);
        }
        seleccionProducto();         
    },[prodId]);

    const cambiarProducto = () => {
         if (prodId.length > 0){
            const seleccion = prodId.find(it => it.id === 2);
            setProducto(seleccion.id);
            }
    }

    return(
        <>
            {   prodId.length > 0 &&
            <ItemDetail producto = {prodId[producto]}></ItemDetail>
            }
        </>
    )
}