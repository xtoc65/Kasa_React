// Importation des composants et hooks nécessaires depuis react-router-dom
import { Route, Routes, Navigate, useParams } from 'react-router-dom';
// Importation du hook personnalisé useFetch pour récupérer les données
import { useFetch } from './utils/hooks';
// Importation des composants de l'application
import Header from './components/Header';
import Home from './pages/Home';
import APropos from './pages/APropos';
import DetailLogement from './pages/Logement';
import Error from './pages/404';
import Footer from './components/Footer';
// Importation du fichier CSS global
import './assets/styles/index.css';

const GuardedRoute = ({listeLogements}) => {
  const { id } = useParams(); // Récupération de l’ID depuis les paramètres d’URL
  // Recherche du logement correspondant à l'ID dans la liste des logements
  const logement = listeLogements.find((logement) => logement.id === id);
  // Affichage dans la console pour vérifier le contenu du logement trouvé
  console.log(logement);
  // Si le logement est trouvé, afficher la page de détail du logement, sinon rediriger vers la page 404
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