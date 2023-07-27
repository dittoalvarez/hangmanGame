import { useState } from "react";

function App() {
  const [wordToGuess, setWordToGuess] = useState("test");
  return <h1>{wordToGuess}</h1>;
}

export default App;
