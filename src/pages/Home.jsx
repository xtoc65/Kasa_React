import { useEffect, useState } from 'react'
import Bannier from '../components/Bannier'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom';

function Home() {  
  const [logements, setLogements] = useState([]) 

  useEffect(()=>{
    fetch("data/logements.json")
      .then((reponse => reponse.json()))
      .then((data => {
        setLogements(data)
      }))
  }, [logements])
  return (
    <main> 
        {/* {JSON.stringify(logements)} */}   
        <Bannier />
        <Cards />
    </main>
  );
}

export default Home;