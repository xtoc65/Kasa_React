import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useFetch } from './utils/hooks';
import Header from './components/Header';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Logement from './pages/Logement';
import Error from './pages/404';
import Footer from './components/Footer';
import './assets/styles/index.css';

function App() {
  const logements = useFetch('/data/logements.json');

  const LogementGuarded = ({data}) => {
    const { id } = useParams(); // Récupération de l'ID depuis les paramètres d'URL
     // Assurez-vous que `data` est un tableau
      if (!Array.isArray(data)) {
        return <Navigate to="/404" />;
      }
    const logement = data.find((logement) => logement.id === id);

    if (!logement) {
      // Si le logement n'est pas trouvé, rediriger vers la page 404
      return <Navigate to="/404" />;
    }

    // Si le logement est trouvé, afficher le composant Logement
    return <Logement data={logement} />;
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home logements={logements} />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={<LogementGuarded data={logements}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;