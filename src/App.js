import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Info } from './Pages/Info';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
  );
}

export default App;