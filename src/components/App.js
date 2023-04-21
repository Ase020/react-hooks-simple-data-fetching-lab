// create your App component here
import React, { useState, useEffect } from "react";

const App = () => {
   const [dog, setDog] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
         .then((res) => res.json())
         .then((data) => {
            setLoading(true);
            setDog(data.message);
         });
   }, []);

   if (!loading) return <p>Loading...</p>;

   return <img src={dog} alt="A Random Dog" />;
};

export default App;

// export default function App() {
//    const [peopleInSpace, setPeopleInSpace] = useState([]);
//    const [isLoaded, setIsLoaded] = useState(false);

//    useEffect(() => {
//       fetch("http://api.open-notify.org/astros.json")
//          .then((response) => response.json())
//          .then((data) => {
//             setPeopleInSpace(data.people);
//             setIsLoaded(true);
//          });
//    }, []);

//    // if the data hasn't been loaded, show a loading indicator
//    if (!isLoaded) return <h3>Loading...</h3>;

//    return <div>{peopleInSpace.map((person) => person.name)}</div>;
// }
