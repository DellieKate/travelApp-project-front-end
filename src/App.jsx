import { useState } from 'react';
import './App.css'

import Login from "./components/Login";
import Register from "./components/Register";
import Wishlist from "./components/Wishlist";
import CountrySelector from "./components/CountrySelector";
import VisaRequirements from "./components/VisaRequirements";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <>
      <h2 style={{ marginTop: "50px" }}>Travel App Features</h2>

      <section style={{ marginTop: "20px" }}>
        <Login />
      </section>

      <section style={{ marginTop: "20px" }}>
        <Register />
      </section>

      <section style={{ marginTop: "20px" }}>
        <CountrySelector onSelect={setSelectedCountry} />
      </section>

      <section style={{ marginTop: "20px" }}>
        <VisaRequirements country={selectedCountry} />
      </section>

      <section style={{ marginTop: "20px" }}>
        <Wishlist />
      </section>
    </>
  );
}

export default App;
