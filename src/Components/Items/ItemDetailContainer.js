import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {itemId} = useParams();
    // DATA

    const baseDeDatos = [
        {
            id: 1,
            title: "Robot",
            category: "Toys",
            price: 10,
            pictureUrl: "https://images.cults3d.com/st8f6YX2-lyxUfTjqDaNgdbr_8o=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14581776/illustration-file/216ff4b1-cb11-4352-a2df-7d9b7c4b82ad/Rendered-3.png"
        },
        {
            id: 2,
            title: "Transformer",
            category: "Toys",
            price: 20,
            pictureUrl: "https://images.cults3d.com/5Xm2bQksB5uwtv0Quk3hDjW7Ilk=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/23832575/illustration-file/67d4fae3-4e56-485e-90da-f2a35e2e18ae/basePrint.jpg"
        },
        {
            id: 3,
            title: "Playmobil",
            category: "Toys",
            price: 5,
            pictureUrl: "https://images.cults3d.com/R4sqJeSZ4zVe-cZTfhX4dqhemuE=/516x516/https://files.cults3d.com/uploaders/14187328/illustration-file/9d4ec608-a95f-4bd4-a3ee-b6cff2b56c1e/7ed15a90f746707e13a1b18817d9bc2c_display_large.jpg#1"
        },
        {
            id: 4,
            title: "Vibrant Facades",
            category: "Art",
            price: 10,
            pictureUrl: "https://images.cults3d.com/M9q1Rx_uigYUWIL0mubZu4f57Z0=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/24814279/illustration-file/702dea0d-872d-4f63-bef9-da783de6246c/Preview1.png"
        },
        {
            id: 5,
            title: "Gukganesh Ornate Throne 1",
            category: "Art",
            price: 10,
            pictureUrl: "https://images.cults3d.com/hZy6HQsiLR1NeQLNsAV0EywTj8w=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/18625519/illustration-file/e39a18cb-336f-4314-bd4b-ddd8dd2e9411/BABYLON-THRONE.2196.png"
        },
        {
            id: 6,
            title: "Cereal Box, Baroque House",
            category: "Art",
            price: 10,
            pictureUrl: "https://images.cults3d.com/j-WK0C7luBtqpnNuXtammPntISg=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/14010325/illustration-file/39ab5e1e-3720-4a25-9e90-acb29515d9d6/IMG_5344_display_large.jpg"
        },
        ];

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