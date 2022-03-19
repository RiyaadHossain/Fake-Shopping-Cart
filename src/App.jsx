import './App.css';
import { useState } from "React";
import Menubar from './Components/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './Components/AllProducts/AllProducts';

function App() {
  const [cart, setCart] = useState(0)
  const setCartCount = () => {
    setCart(cart + 1)
  }
  return (
    <div className="App">
      <Menubar cart={cart}></Menubar>
      <AllProducts setCartCount ={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
