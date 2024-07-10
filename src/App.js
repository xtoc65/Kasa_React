import './utils/styles/index.css';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer'
import APropos from './pages/APropos'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
