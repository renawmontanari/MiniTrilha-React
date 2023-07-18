
const UserDetails = ({ name, age }) => {
  return (
    <div>
        <h2>Desafio 4</h2>
        <h3>Detalhes do Usuário</h3>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            {age >= 18 ? (
                <p>Pode tirar carteira de habilitação</p>
            ) : (
                <p>Menor de idade!</p>
            )}
        </ul>
    </div>
  )
}

export default UserDetails