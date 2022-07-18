import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Compile from './Component/Compile';
import ProductDetails from './Component/ProductDetails';


function App() {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/products" element={<Compile/>}/>
        <Route path= {`/productDetails/:id`} element={<ProductDetails/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;