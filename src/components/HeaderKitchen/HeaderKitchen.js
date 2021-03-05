import React from "react";
import "./HeaderKitchen.css";
import { useHistory } from "react-router-dom";
import Logout from "../../assets/logout.png";

function HeaderKitchen() {
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
                <div className="form-header">
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
export default HeaderKitchen;
