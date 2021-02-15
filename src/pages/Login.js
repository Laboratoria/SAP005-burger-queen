import React from "react";
import { Link } from "react-router-dom"

export const Login = () => (
    <div>
        <header>
            <h1>Página Home</h1>
            <p>
                <Link to="/Register">Ir para a página de registro</Link>
            </p>
        </header>
    </div>
);  