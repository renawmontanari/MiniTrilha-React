
import { useState } from 'react';
import './App.css'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {

  //const name = "Renan";

  const [userName] = useState("Renan");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Azul", newCar: false, km: 4567},
    {id: 3, brand: "Fiat", color: "Branco", newCar: false, km: 678987},
    {id: 4, brand: "VW", color: "Preto", newCar: false, km: 345676},
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  return (
    <>
      <div className='App'>
        <h1>Hello-World</h1>
        {/* useState */}
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* Props */}
        <ShowUserName name={userName} />
        {/* Destructuring */}
        <CarDetails brand="VW" km={1000} color="Branco" newCar={false} />
        {/* Reaproveitamento */}
        <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
        <CarDetails brand="Tesla" color="Azul" km={10} newCar={false} />
        {/* Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails 
            key={car.id}
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar} 
          /> 
        ))}
        {/* Fragment */}
        <Fragment propFragment="teste" />
        {/* Children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        {/* Executar Função */}
        <ExecuteFunction myFunction={showMessage} />
      </div> 
    </>
  );
}

export default App 
