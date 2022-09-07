import "./App.css";
import NavBar from "./Components/Header/NavBar";
import { ItemListContainer } from "./Components/Items/ItemListContainer";
import { ItemDetailContainer } from './Components/Items/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {


  return(
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/category/" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>    
    </BrowserRouter>
  )

}
export default App