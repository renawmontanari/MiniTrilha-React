import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Renan", "João", "Josias", "Carmen"]);

  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  );
};

export default ListRender