import React from "react";
import NavBar from "./navBar";
import Carrito from "./carrito"
//import "./header.css"

const Header = () =>{
    return(
        <header style={styles.header}>
        <NavBar />
        <Carrito />
        </header>
    )
}

const styles = {
    header: { 
        background: "#001540",
        color: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2em"
    }
}

export default Header