import "./InputCopie.css";

function InputCopie({
  placeholder,
  setInputValue,
  inputValue,
  copied,
  setCopied,
  isFocused, 
  setIsFocused,
}) {
  const handleCopy = () => {
    if (inputValue) {
      navigator.clipboard.writeText(inputValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Réinitialise l'état après 2 sec
      
    } else {
      alert("Aucun texte à copier.");
    }
  };
  

  return (
    <div className="int">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className={isFocused ? "input-focused" : "input-default"}
        onFocus={()=>setIsFocused(true)}
        onBlur={()=>setIsFocused(false)}
      />
      <button className="copy-button" onClick={handleCopy}>
        Copier
      </button>
      {copied && <p style={{ color: "green" }}>Texte copié ✅</p>}
    </div>
  );
}

export default InputCopie;
