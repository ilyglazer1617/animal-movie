import React, { createContext, useState } from "react";
import axios from "axios";
export const AnimalContext = createContext();
const url = "http://localhost:3002/api/animals";

function AnimalProvider(props) {
  const { children } = props;
  const [animal, setAnimal] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const bringAllAnimalsFromMongo = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      setErrorMsg("didnt get all animals");
    }
  };

  const AddAnimal = async (animalObj) => {
    console.log(animalObj);
    try {
      const response = await axios.post(url, animalObj);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(animalObj);
  };

  const showAllAnimals = async () => {
    await bringAllAnimalsFromMongo();
    // console.log(allBooks);
  };

  return (
    <AnimalContext.Provider value={{ AddAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
}

export default AnimalProvider;
