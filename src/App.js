import "./App.css";
import React from "react";
import NavBar from "./Components/Header/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer"

const App = () => {
  return(
    <>
      <NavBar></NavBar>
      <ItemListContainer/>
    </>
  )
}
export default App