import './App.css';
import Menubar from './Components/Menubar/Menubar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './Components/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
