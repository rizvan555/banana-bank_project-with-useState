import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import EinzahlungButton from "./components/EinzahlungButton";
import AuszahlungButton from "./components/AuszahlungButton";

function App() {
  const [saldo, setSaldo] = useState("");
  const [inputValue, setInputValue] = useState();

  return (
    <div className="App">
      <Header />
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
          <EinzahlungButton
            setSaldo={setSaldo}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <AuszahlungButton
            setSaldo={setSaldo}
            setInputValue={setInputValue}
            inputValue={inputValue}
            saldo={saldo}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
