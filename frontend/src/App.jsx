import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CitasD from './pages/CitasD';
import Login from "./pages/Login";
import Panel from "./components/Panel";

function App() {
  return (  
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="CitasD" element={<CitasD/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Panel" element={<Panel/>} />
    </Routes>
    </div>
  );
}

export default App;
