import './App.css';

function App() {
  const cadInputName = document.querySelector("#cadInputName");
  const cadInputEmail = document.querySelector("#cadInputEmail");
  const cadInputPassword = document.querySelector("#cadInputPassword");
  const cadInputRole = document.querySelector("#cadInputRole");
  function cadBtn(e) {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/users/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${cadInputEmail.value}&password=${cadInputPassword.value}&role=${cadInputRole.value}&restaurant=BurgerHunger&name=${cadInputName.value}`
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert('Usuário criado com sucesso');
        cadInputName.value = "";
        cadInputEmail.value = "";
        cadInputPassword.value = "";
        cadInputRole.value = "";
        cadInputName.value = "";
      })
  };

  return (
    <div className="App">
      <h1 className="Cadastro">Cadastro</h1>
      <form className="FormCadastro">
        <label htmlFor="cadInputName">Nome:</label>
        <input type="text" placeholder="Nome" className="cadInput" id="cadInputName"></input>

        <label htmlFor="cadInputEmail">E-mail:</label>
        <input type="text" placeholder="E-mail" className="cadInput" id="cadInputEmail"></input>

        <label htmlFor="cadInputPassword">Senha:</label>
        <input type="text" placeholder="Senha" className="cadInput" id="cadInputPassword"></input>

        <label htmlFor="cadInputRole">Cargo:</label>
        <select class="input" name="ordenar" className="cadInput" id="cadInputRole">
          <option disabled selected value="">Cargo</option>
          <option value="garcom">Garçom</option>
          <option value="cozinheiro">Cozinheiro</option>
        </select>
        <button className="cadBtn" onClick={cadBtn}>Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
