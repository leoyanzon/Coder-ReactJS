import {Item} from './Item'

export const ItemList = ({items}) => {
    return(
        <div className = "ItemContainer">
        {
            items.map((it)=>{
                return(
                    <Item key={it.id} item={it}/>
                )
            })
        }
        </div>
    )
}