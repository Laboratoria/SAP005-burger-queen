import React, { useState } from 'react';

const CardapioCafeManha = () => {
  const [userInfo, setUser] = useState({ 'restaurant': 'Burguer Beef' });
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.id !== null) {
          alert('Usuário criado com sucesso!');
          history.push('/');
        } else {
          alert('Algo deu errado, por favor confira os dados novamente')
        }
      })
      .catch((error) => {
        alert(error.message);
        history.push('/Cadastro');
      });
      
  }

  return (
    <div>
      
    </div>
  )
};

export default CardapioCafeManha;
