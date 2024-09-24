//useEffect pour les effets de bord et useState pour gérer l'état local
import { useEffect, useState } from "react";

// Déclaration du hook personnalisé useFetch, qui prend une URL en paramètre
export function useFetch (url){
    // Initialisation de l'état pour les données récupérées
    // Ici, 'data' est initialisé à un tableau vide, et 'setData' permet de mettre à jour cet état
    const [data, setData] = useState([])

    // Utilisation de useEffect pour déclencher la récupération des données lorsque l'URL change
    useEffect(() =>{
        // Déclaration de la fonction asynchrone qui va gérer la requête et la récupération des données
        async function fetchData(){
            // Envoi de la requête à l'URL fournie et attente de la réponse
            const response = await fetch(url);
            // Conversion de la réponse en JSON pour obtenir les données sous forme d'objet JavaScript
            const data = await response.json();
            // Mise à jour de l'état 'data' avec les données récupérées
            setData(data);
        }
         // Appel de la fonction fetchData pour lancer la récupération des données
         fetchData();
         // Le hook est dépendant de 'url', ce qui signifie que la récupération des données
         // sera effectuée chaque fois que l'URL changera
     }, [url]); // Le tableau de dépendances contient 'url', donc useEffect se déclenche si l'URL change
 
     // Retourne les données récupérées, que le composant qui utilise ce hook pourra exploiter
     return data;
}