import { useState } from "react";
import Modal from "./Components/Event";
import "./App.css";
import InputCopie from "./Components/InputCopie";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Bonjour le monde");

  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false); // Ajout de l'état copied
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <Modal count={count} setCount={setCount} name={name} setName={setName} />
      <InputCopie
        inputValue={inputValue}
        setInputValue={setInputValue}
        copied={copied}
        setCopied={setCopied}
        isFocused={isFocused} 
        setIsFocused={setIsFocused}
        placeholder="Entrez du texte à copier ici"
      />
    </>
  );
}

export default App;
