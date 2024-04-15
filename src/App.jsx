import "./App.css";
import { ButtonFetch } from "./components/ButtonFetch";
import { Character } from "./components/Characters";

function App() {
  return (
    <div className="d-flex flex-column">
      <h1>Personajes de Rick and Morty</h1>
      <div>
        <ButtonFetch />
      </div>
      <Character />
    </div>
  );
}

export default App;
