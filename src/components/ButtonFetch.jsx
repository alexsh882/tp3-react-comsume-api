import { useContext } from "react";
import { CharactersContext } from "../contexts/CharactersContext";

export const ButtonFetch = () => {
  const { fetchCharacters } = useContext(CharactersContext);

  const handleOnClick = async () => {
    console.log("Cargar Personajes");
    try {
      await fetchCharacters();
    } catch (error) {}
  };
  return (
    <button className="btn btn-outline-primary" onClick={handleOnClick}>
      Cargar Personajes
    </button>
  );
};
