import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Projetos1 from './components/Projetos/index1';
import Projetos2 from './components/Projetos/index2';
import Projetos3 from './components/Projetos/index3';
import { BrowserRouter as Navegador, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projetos1' element={<Projetos1 />} />
          <Route path='/Projetos2' element={<Projetos2 />} />
          <Route path='/Projetos3' element={<Projetos3 />} />
        </Routes>
      </Navegador>
      <Footer />
    </>
  );
}

export default App;
