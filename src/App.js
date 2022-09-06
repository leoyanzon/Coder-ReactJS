import "./App.css";
import NavBar from "./Components/Header/NavBar";
import { ItemListContainer } from "./Components/Items/ItemListContainer";
import { ItemDetailContainer } from './Components/Items/ItemDetailContainer'


const App = () => {


  return(
    <>
      <NavBar></NavBar>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )

}
export default App