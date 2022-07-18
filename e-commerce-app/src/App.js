import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Compile from './Component/Compile';

function App() {
  return (
    <div>
      <Login/>
      <Compile />
    </div>
  );
}

export default App;