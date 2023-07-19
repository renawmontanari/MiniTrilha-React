import "./App.css";
import MyComponent from "./components/MyComponent";

import { useState } from "react";


function App() {

  const [name] = useState("Renan");

  return (
    <>
        {/* CSS Global */}
        <MyComponent />
        {/* Inline CSS */}
        <p style={{ color:"black" }}>Este elemento foi estilizado de forma inline</p>
        {/* Inline CSS Dinamico */}
        <h3 
          style={ name == "Renan" 
          ? { color: "green", backgroundColor: "white" } 
          : null }
        >
          Teste nome
        </h3>
    </>
  );
};

export default App;
