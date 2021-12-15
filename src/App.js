import "./App.css";
import { useState } from "react";
import ConfigArea from "./configarea";
import Field from "./field";

function App() {
  const [level, setLevel] = useState(null);

  //------------------------

  function resetGame() {
    setLevel(null);
  }

  // console.log("Complexity - ", complexity);
  //------------------------
  return (
    <div className="App">
      <header className="App-header"></header>
      {level ? (
        <Field rows={level.row} columns={level.column} complexity={level.complexity}  resetGame={resetGame} />
      ) : (
        <ConfigArea onLevelChange={setLevel} />
      )}
    </div>
  );
}

export default App;
