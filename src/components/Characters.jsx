import { useContext } from "react";

import { CharactersContext } from "../contexts/CharactersContext";
import { useEffect } from "react";

export const Character = () => {
  const { characters, deleteCharacter, loading } = useContext(CharactersContext);

  return (
    <div className="row gap-2 my-2">
      {
        loading && <h2>Cargando...</h2>
      }
      {characters ? (
        characters?.map((character) => (
          <div key={character.id} className="col">
            <div  className="card" style={{ width: "18rem" }}>
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.species}</p>
              </div>
              <div className="card-footer">
                <button onClick={() => deleteCharacter(character.id)} className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h2>No hay personajes</h2>
      )}
    </div>
  );
};
