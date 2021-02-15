import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../img/logo.gif';

const HeaderKitchen = (props) => {
const history = useHistory();

return <header>
<div>Chef: {props.chef}</div>
<img src={logo} alt="logo" height="165px" width="164px" />;
<button className="back-button" onClick={() => { 
  history.push("/")
  localStorage.clear() 
}
}>BACK</button>
</header>
}

export default HeaderKitchen;
