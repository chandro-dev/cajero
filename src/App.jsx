import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownTimer from './componentes/cajero'
import Login from './componentes/Login'
import ListaPersonas from './componentes/listaPersonas'
import Validacion from './componentes/Validacion';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/cajero" element={<Login />}></Route>
        <Route path="/cajero/Retiros" element={<CountdownTimer />} />
        <Route path="/cajero/Personas" element={<ListaPersonas />}></Route>
        <Route path="/cajero/Validacion/:Tipo" element={<Validacion />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
