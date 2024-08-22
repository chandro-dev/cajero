import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownTimer from './componentes/cajero'
import Login from './componentes/Login'
import GenerateCodigo from './componentes/Generarcodigos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownTimer />} />
        <Route path="Registro" element={<Login/>}></Route>
        <Route path="GenerateCode" element={<GenerateCodigo/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
