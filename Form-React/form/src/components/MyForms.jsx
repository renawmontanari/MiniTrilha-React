import { useState } from 'react';
import './MyForms.css';

const MyForms = ({ user }) => {

    // Controlled inputs


    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    };

    //console.log(name);
    //console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Enviando o formulário');
        console.log(name, email, bio, role);

        // Validação
        // Envio

        // Limpar formulário
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

  return (
    <div>
        {/* Envio de Form */}
        {/* Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Digite seu nome'
                    onChange={handleName} 
                    value={name}
                />
            </div>
            {/* Label envolvendo input (Forma mais indicada) */}
            {/* Simplificação de manipulação de state */}
            <label>
                <span>E-mail</span>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Digite o seu email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            {/* Textarea */}
            <label>
                <span>BIO</span>
                <textarea 
                    name='bio' 
                    placeholder='Descrição do usuário' 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio}
                ></textarea>
            </label>
            {/* Select */}
            <label>
                <label>
                    <span>Função no sistema</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
                        <option>--</option>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
            </label>
            <input type='submit' value='Enviar' />
        </form>
    </div>
  );
};

export default MyForms;