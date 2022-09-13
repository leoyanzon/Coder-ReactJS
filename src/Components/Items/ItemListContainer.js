import {ItemList} from './ItemList'
import { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';



//FUNCION ITEMLISTCONTAINER

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const {baseDeDatos} = useContext(CartContext);
  
    //Promesa ficticia simulando retardo de api
    const obtenerDatosApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(baseDeDatos)
        }, 100)
    })
    }

    //Use efect se ejecuta UNA VEZ que fue renderizado el componente. Cuando termina de renderizarse
    
    useEffect(()=>{ // Si tiene [] se ejecuta 1 sola vez solamente despues del primer renderizado.
    const funcionAsincronaObtener = async() => {
        try{
            const listado = await obtenerDatosApi();
            if (categoryId == undefined){
                setItems (listado);
            }else {
                const filtrado = listado.filter(it => 
                    it.category == categoryId)
                
                setItems(filtrado);
            }
            
        }
        catch{
            console.log("Ocurrió un error");
        }
    }
    funcionAsincronaObtener();
    },[categoryId]);

    return (
        <>
        <div className = "itemListContainer">
            <h1>Explorar Modelos</h1>
            {/* <ItemCount initial = {1} stock={6}></ItemCount> */}
            <ItemList items = {items}></ItemList>
            
            {
                items.length === 0 &&
              <div className = "loader">
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
              </div>  
            }
        </div>
        </>
    )
}