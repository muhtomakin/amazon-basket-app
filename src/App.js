import { Routes, Route } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Main from './components/Main';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    
  );
}

export default App;
