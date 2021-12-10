import "./App.css";
import { useState } from "react";
import ConfigArea from "./configarea";
import Field from "./field";

function App() {
  const [complexity, setComplexity] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {complexity ? (
        <Field rows={complexity.row} columns={complexity.column} />
      ) : (
        <ConfigArea onComplexityChange={setComplexity} />
      )}
    </div>
  );
}

export default App;
