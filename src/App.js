import "./App.css";
import NavBar from "./Components/Header/NavBar";
import { ItemListContainer } from "./Components/Items/ItemListContainer";
import { ItemDetailContainer } from './Components/Items/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {


  return(
      <CartProvider>
          <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/category/" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>    
        </BrowserRouter>
      </CartProvider>
      
  )

}
export default App