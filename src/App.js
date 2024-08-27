import {Route, Routes } from 'react-router-dom';
import {useFetch} from './utils/hooks'
import Header from './components/Header';
import Home from './pages/Home';
import APropos from './pages/APropos'
import Logements from './pages/Logements'
import Error from './pages/404'
import Footer from './components/Footer'
import './assets/styles/index.css';

function App() {
  const logements = useFetch('/data/logements.json') 
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home logements={logements}/>} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logements data={logements}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
