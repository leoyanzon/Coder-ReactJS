import {useState} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button'

export const ItemCount = ({initial, stock}) => {

    const [onAdd, setOnAdd] = useState(initial);  

    return (
        <div style={styles.itemCount}>
            <h2>Max Stock: {stock}</h2>
            <p>{onAdd}</p>

            <ButtonGroup variant="outlined" aria-label="outlined button group" style = {styles.buttons}>
                <Button onClick = {()=> onAdd > 0 ? setOnAdd(onAdd-1): false} >-</Button>
                <Button onClick = {()=> setOnAdd(stock)} >Max</Button>
                <Button onClick = {()=> onAdd < stock ? setOnAdd(onAdd+1): false} >+</Button>
            </ButtonGroup>

            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button>Seleccionar</Button>
            </ButtonGroup>
        </div>

    )
}

const styles = {
    itemCount: {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        color: "blue"
    },
    buttons: {
        padding: "10px"
    }

}