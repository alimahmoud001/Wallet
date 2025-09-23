import React, { useState } from "react";
import WalletHome from "./components/WalletHome";
import WalletDashboard from "./components/WalletDashboard";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (mnemonicPhrase) => {
    setMnemonic(mnemonicPhrase);
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? 
        <WalletHome onLogin={handleLogin} /> 
        : 
        <WalletDashboard mnemonic={mnemonic} />
      }
    </div>
  );
}

export default App;