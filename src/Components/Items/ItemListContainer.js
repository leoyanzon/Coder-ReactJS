import {ItemList} from './ItemList'



//FUNCION ITEMLISTCONTAINER

export const ItemListContainer = ({items}) => {


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