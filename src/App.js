import { Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useFetch } from './utils/hooks';
import Header from './components/Header';
import Home from './pages/Home';
import APropos from './pages/APropos';
import DetailLogement from './pages/Logement';
import Error from './pages/404';
import Footer from './components/Footer';
import './assets/styles/index.css';

const GuardedRoute = ({listeLogements}) => {
  const { id } = useParams(); // Récupération de l’ID depuis les paramètres d’URL
  // Assurez-vous que `data` est un tableau
  const logement = listeLogements.find((logement) => logement.id === id);
  console.log(logement);
  return (
    logement ? <DetailLogement logement={logement} /> : <Navigate to="/404" />
  )
};

function App() {
  const logements = useFetch('/data/logements.json');

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home logements={logements} />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:id" element={
          <GuardedRoute
            listeLogements={logements}
          />}
        >
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;