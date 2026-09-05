import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CitasD from './pages/CitasD';
import Login from "./pages/Login";

function App() {
  return (  
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="CitasD" element={<CitasD/>} />
      <Route path="Login" element={<Login/>} />
    </Routes>
    </div>
  );
}

export default App;
