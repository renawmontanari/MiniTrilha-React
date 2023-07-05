import { useState } from "react"

const ListRender = () => {
  const [list] = useState(["Renan", "João", "Josias", "Carmen"]);
  
  const [users, setUsers] = useState([
    { id: 1, name: "Pedro", age: 32 },
    { id: 2, name: "Marcus", age: 45 },
    { id: 3, name: "Maria", age: 25 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
    });
  };

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
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender