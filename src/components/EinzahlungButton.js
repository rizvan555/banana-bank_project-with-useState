const EinzahlungButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setSaldo((prevSaldo) => {
          return prevSaldo + Number(props.inputValue);
        });
        props.setInputValue("");
      }}
      className="einzahlen"
    >
      Einzahlen
    </button>
  );
};

export default EinzahlungButton;
