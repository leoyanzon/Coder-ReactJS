import { ItemDetail } from './ItemDetail';
import { useEffect, useState , useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {itemId} = useParams();
    const {baseDeDatos} = useContext(CartContext);
    // DATA

  //Promesa ficticia simulando retardo de api
    const obtenerDatosApi = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(baseDeDatos)
            }, 200)
        })
    }

    //Use efect se ejecuta UNA VEZ que fue renderizado el componente. Cuando termina de renderizarse
    
    useEffect(()=>{ // Si tiene [] se ejecuta 1 sola vez solamente despues del primer renderizado.
        const funcionAsincronaObtener = async() => {
            try{
                const listado = await obtenerDatosApi();
                const filtrado = listado.find(it => it.id == itemId);
                if (filtrado != undefined){
                     setItem (filtrado);

                } else{
                    setItem (listado);                   
                }
            }
            catch{
                console.log("Ocurrió un error");
            }
        }
        funcionAsincronaObtener();
    },[]);

    return(
        <>
            {   item !== undefined &&
            <div className ="detailContainer">
                <ItemDetail producto = {item}></ItemDetail>
            </div>
            
            }
        </>
    )
}