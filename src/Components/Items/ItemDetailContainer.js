import {useState, useEffect} from 'react';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = ({prodId}) => {
    
    const [item, setItem] = useState([]);
    
    
    //Promesa ficticia simulando retardo de api
    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(prodId);
            }, 3000)
        });
    }
    
    //Use efect se ejecuta UNA VEZ que fue renderizado el componente. Cuando termina de renderizarse
    
    useEffect(()=>{ // Si tiene [] se ejecuta 1 sola vez solamente despues del primer renderizado.
        const funcionAsincronaObtener = async() => {
            try{
                const listado = await getItem();
                setItem (listado);
            }
            catch{
                console.log("Ocurrió un error");
            }
        }
        funcionAsincronaObtener();
    },[]);


    return(
        <>
          <ItemDetail id = {item.id} title = {item.title} price = {item.price} pictureUrl = {item.pictureUrl}></ItemDetail>
        </>
    )
}