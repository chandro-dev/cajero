import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownTimer from './componentes/cajero'
import Login from './componentes/Login'
import GenerateCodigo from './componentes/Generarcodigos';
import ListaPersonas from './componentes/listaPersonas'
function App() {
  return (
    <Router>
      <Routes>

        <Route path="Cajero" element={<CountdownTimer />} />
        <Route path="/" element={<Login />}></Route>
        <Route path="GenerateCode" element={<GenerateCodigo />}></Route>
        <Route path="Personas" element={<ListaPersonas />}></Route>

      </Routes>
    </Router>
  );
}
export default App;
