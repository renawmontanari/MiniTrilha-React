
import { useState } from 'react';
import './App.css'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {

  const name = "Renan";

  const [userName] = useState("Renan");

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
      </div> 
    </>
  );
}

export default App 
