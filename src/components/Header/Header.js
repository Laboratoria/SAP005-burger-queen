import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import Logout from "../../assets/logout.png";
import Logo from "../../assets/logo.png";

function Header() {
  const user = localStorage.getItem("name");
  const history = useHistory();

  const handleSignOut = (event) => {
    alert("Usuário deslogado");
    localStorage.clear();
    history.push("/");
  };

  return (
    <header>
      <div className="header-hall">
        <p className="welcome-header">Bem vindo, {user}!!</p>
        {/* <img className="logo-header" src={Logo} alt="icon-logo"/>     */}

        <div className="form-header">
          <select className="select-table" name="tables" id="tables">
            <option value="table1">Mesa 01</option>
            <option value="table2">Mesa 02</option>
            <option value="table3">Mesa 03</option>
            <option value="table4">Mesa 04</option>
            <option value="table5">Mesa 05</option>
            <option value="table6">Mesa 07</option>
            <option value="table6">Mesa 08</option>
            <option value="table6">Mesa 09</option>
            <option value="table6">Mesa 10</option>
          </select>

          <div className="container-nameCustomer">
            <input
              className="item-nameCustomer"
              type="text"
              id="nome"
              placeholder="Nome do Cliente"
            />
          </div>

          <div className="container-btn-myOrder">
            <button className="item-btn-myOrder" type="submit">
              {" "}
              Meus Pedidos
            </button>
          </div>

          <div className="container-icon-logout">
            <img
              className="item-icon-logout"
              src={Logout}
              alt="icon-logout"
              onClick={handleSignOut}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
