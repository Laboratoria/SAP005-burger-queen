import React, { useState } from "react";

const Cozinha = () => {
  const [pedido, setPedido] = useState(0);

  const recebePedido = () => {
    setPedido(pedido + 1);
  };

  return (
    <div>
      <div>{pedido}</div>
      <button onClick={recebePedido}>Criar Pedido</button>
    </div>
  );
};

export default Cozinha;
