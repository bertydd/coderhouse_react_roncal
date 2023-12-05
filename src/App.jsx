import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer";
import CountComponent from "./components/CountComponent";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
  <div style={{ width: '100vw', height: '100vh'}}>
    <NavBarComponent/>
    <ItemListContainer greeting="Bienvenidos a mi tienda"/>
  </div>
  );

}

export default App;
