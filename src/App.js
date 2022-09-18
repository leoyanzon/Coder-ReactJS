import "./App.css";
import NavBar from "./components/Header/NavBar";
import { ItemListContainer } from "./components/Items/ItemListContainer";
import { ItemDetailContainer } from './components/Items/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {


  return(
      <CartProvider>
          <BrowserRouter>
          <NavBar></NavBar>
          <div className ="main_content">
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/category/" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>    
          </div>
       
        </BrowserRouter>
      </CartProvider>
      
  )

}
export default App