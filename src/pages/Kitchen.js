import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Kitchen = () => {
  return (
    <div className="Kitchen">
      <Header/>
      <div className="Kitchen-header">
        <p>Você está na cozinha</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Kitchen;