const AuszahlunButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setSaldo(() => {
          return props.saldo - props.inputValue;
        });
        props.setInputValue("");
      }}
      className="auszahlen"
    >
      Auszahlen
    </button>
  );
};

export default AuszahlunButton;
