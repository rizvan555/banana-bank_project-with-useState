import "./App.css";
import { useState } from "react";

function App() {
  const [saldo, setSaldo] = useState("");
  const [inputValue, setInputValue] = useState();

  return (
    <div className="App">
      <header>
        <img
          src="https://domf5oio6qrcr.cloudfront.net/medialibrary/6372/202ebeef-6657-44ec-8fff-28352e1f5999.jpg"
          alt="banana_img"
          className="logoImg"
        />
        <h1 id="title">Banana Bank</h1>
      </header>
      <main className="konto">
        <h1>Dein Girokonto</h1>
        <section className="saldo">{saldo}€</section>
        <input
          type="number"
          className="geldbetrag"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Gib einen Geldbetrag ein"
        />
        <div className="button-conatiner">
          <button
            onClick={() => {
              setSaldo((prevSaldo) => {
                return prevSaldo + inputValue;
              });
              setInputValue("");
            }}
            className="einzahlen"
          >
            Einzahlen
          </button>
          <button
            onClick={() => {
              setSaldo(() => {
                return saldo - inputValue;
              });
              setInputValue("");
            }}
            className="auszahlen"
          >
            Auszahlen
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
