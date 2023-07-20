import "./App.css";
import MyComponent from "./components/MyComponent";

import { useState } from "react";
import Title from "./components/Title";
import Chanllegecss from "./components/Chanllegecss";
import CarsDetails from "./components/CarsDetails";

function App() {

  const [name] = useState("Renan");

  const cars = [
    {id: 1, brand: "VW", color: "Vermelho", km: 234},
    {id: 2, brand: "VW", color: "Azul", km: 4234},
    {id: 3, brand: "Fiat", color: "Laranja", km: 0}
  ];

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
        {/* CSS Modules */}
        <Title />
        {/* Desafio 5 */}
        <CarsDetails />
        {cars.map((car) => (<Chanllegecss 
          id={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
        ))}
    </>
  );
};

export default App;
