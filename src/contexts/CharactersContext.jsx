import { createContext, useState } from "react";

import { useFetch } from "../hooks/useFetch";
import { fetchCharacters as fC } from "../services/fetchCharacters";
import { useEffect } from "react";

export const CharactersContext = createContext({});

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const { data, error, loading, fetchData } = useFetch({
    func: fC,
    eager: false,
  });

  useEffect(() => {
    if (data) {
      setCharacters(data.results);
    }
  }, [data]);

  const fetchCharacters = async () => {
    try {
      fetchData();
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCharacter = (id) => {
    console.log(id);
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character.id !== id)
    );
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loading,
        fetchCharacters,
        deleteCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
