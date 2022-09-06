import {ItemList} from './ItemList'
import {useState, useEffect} from 'react'



//FUNCION ITEMLISTCONTAINER

export const ItemListContainer = () => {
    const [items, setItems] = useState([])

// DATA

    const baseDeDatos = [
    {
        id: 1,
        title: "Robot",
        price: 10,
        pictureUrl: "https://images.cults3d.com/st8f6YX2-lyxUfTjqDaNgdbr_8o=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14581776/illustration-file/216ff4b1-cb11-4352-a2df-7d9b7c4b82ad/Rendered-3.png"
    },
    {
        id: 2,
        title: "Transformer",
        price: 20,
        pictureUrl: "https://images.cults3d.com/5Xm2bQksB5uwtv0Quk3hDjW7Ilk=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/23832575/illustration-file/67d4fae3-4e56-485e-90da-f2a35e2e18ae/basePrint.jpg"
    },
    {
        id: 3,
        title: "Playmobil",
        price: 5,
        pictureUrl: "https://images.cults3d.com/R4sqJeSZ4zVe-cZTfhX4dqhemuE=/516x516/https://files.cults3d.com/uploaders/14187328/illustration-file/9d4ec608-a95f-4bd4-a3ee-b6cff2b56c1e/7ed15a90f746707e13a1b18817d9bc2c_display_large.jpg#1"
    }
    ];

    //Promesa ficticia simulando retardo de api
    const obtenerDatosApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(baseDeDatos)
        }, 2000)
    })
    }

    //Use efect se ejecuta UNA VEZ que fue renderizado el componente. Cuando termina de renderizarse
    
    useEffect(()=>{ // Si tiene [] se ejecuta 1 sola vez solamente despues del primer renderizado.
    const funcionAsincronaObtener = async() => {
        try{
            const listado = await obtenerDatosApi();
            setItems (listado);
        }
        catch{
            console.log("Ocurrió un error");
        }
    }
    funcionAsincronaObtener();
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