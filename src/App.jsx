import './App.css';
import Menubar from './Components/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from 'aos'; // Animation
import 'aos/dist/aos.css'; // Animation

function App() {
  const [cart, setCart] = useState(0)

  const setCartCount = () => {
    setCart(cart + 1)
  }

  useEffect(() => {
    AOS.init() // Animation
  } ,[])
  return (
    <div className="App">
      <Menubar cart={cart}></Menubar>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div>
  );
}

export default App;
