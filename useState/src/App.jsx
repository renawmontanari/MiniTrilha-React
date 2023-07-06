
import { useState } from 'react';
import './App.css'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

function App() {

  const name = "Renan";

  const [userName] = useState("Maria");

  return (
    <>
      <div className='App'>
        <h1>Hello-World</h1>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        <ShowUserName name={userName} />
      </div>
    </>
  );
}

export default App 
