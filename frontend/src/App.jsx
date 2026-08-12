import Home from './pages/Home';
import Citas from './pages/CitasD';
import { Routes, Route } from 'react-router-dom';
import CitasD from './pages/CitasD';

function App() {
  return (  
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="CitasD" element={<CitasD/>} />
    </Routes>
    </div>
  );
}

export default App;
