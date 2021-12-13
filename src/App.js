import "./App.css";
import { useState } from "react";
import ConfigArea from "./configarea";
import Field from "./field";

function App() {
  const [complexity, setComplexity] = useState(null);

  //------------------------

  function resetGame() {
    setComplexity(null);
  }

  // console.log("Complexity - ", complexity);
  //------------------------
  return (
    <div className="App">
      <header className="App-header"></header>
      {complexity ? (
        <Field rows={complexity.row} columns={complexity.column} resetGame={resetGame} />
      ) : (
        <ConfigArea onComplexityChange={setComplexity} />
      )}
    </div>
  );
}
// try 2
export default App;
