import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Renan", "João", "Josias", "Carmen"]);
  
  const [users] = useState([
    { id: 1, name: "Pedro", age: 32 },
    { id: 345, name: "Marcus", age: 45 },
    { id: 3467, name: "Maria", age: 25 },
  ]);

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((itemUsers) => (
                <li key={itemUsers.id}>Nome: {itemUsers.name} - 
                Idade: {itemUsers.age}</li>
            ))}
        </ul>
    </div>
  );
};

export default ListRender