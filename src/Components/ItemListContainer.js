import {ItemCount} from './ItemCount'

export const ItemListContainer = () => {

    return (
        <div style = {styles.itemListContainer}>
            <h1>Cantidad</h1>
            <ItemCount initial = {1} stock={6}></ItemCount>
        </div>

    )
}

const styles = {
    itemListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
}