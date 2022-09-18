import {ItemList} from './ItemList'
import { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import db from "../../utils/firebase"
import { collection, getDocs } from 'firebase/firestore';



//FUNCION ITEMLISTCONTAINER

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    
    //const {baseDeDatos} = useContext(CartContext);
  
    //Promesa ficticia simulando retardo de api
    // const obtenerDatosApi = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //         resolve(baseDeDatos)
    //     }, 100)
    // })
    // }
    const obtenerDatosApi = async()=>{
        const query = collection(db,"items");
        const response = await getDocs(query);
        const docs = response.docs;
        const newDb = docs.map(doc=>{return {...doc.data(), id:parseInt(doc.id)}});
        return newDb;
    }


    //Use efect se ejecuta UNA VEZ que fue renderizado el componente. Cuando termina de renderizarse
    
    useEffect(()=>{ // Si tiene [] se ejecuta 1 sola vez solamente despues del primer renderizado.
    const funcionAsincronaObtener = async() => {
        try{
            const listado = await obtenerDatosApi();
            if (categoryId == undefined){
                const filtrado = listado.filter(it =>
                    it.stock > 0);
                setItems (filtrado);
            }else {
                const filtrado = listado.filter(it => 
                    it.category == categoryId
                    && it.stock > 0)
                
                setItems(filtrado);
            }
            
        }
        catch{
            console.log("Ocurrió un error");
        }
    }
    funcionAsincronaObtener();
    },[categoryId]);

    useEffect(()=>{

    },[]);

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