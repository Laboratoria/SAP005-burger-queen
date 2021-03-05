import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import Logout from "../../assets/logout.png";

function Header() {
  const user = localStorage.getItem("name");
  const history = useHistory();

  const handleSignOut = (event) => {
    alert("Usuário deslogado");
    localStorage.clear();
    history.push("/");
  };

  const routerOrderReady = () => {
    history.push("/OrderReady");
  };

  return (
    <header>
      <div className="header-hall">
        <p className="welcome-header">Bem vindo, {user}!!</p>
        <div className="form-header">
          <div className="container-btn-myOrder">
            <button
              className="item-btn-myOrder"
              type="submit"
              onClick={() => {
                routerOrderReady();
              }}
            >
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
