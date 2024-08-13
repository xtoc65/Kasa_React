import './utils/styles/index.css';
import {Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import APropos from './pages/APropos'
import Logements from './pages/Logements'
import Error from './pages/404'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<Logements />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
