import React from 'react';
import logo from '../img/logo.gif';

const HeaderKitchen = (props) => <div>
<div>Chef: {props.chef}</div>
<img src={logo} alt="logo" height="165px" width="164px" />;
<div>testando</div>
</div>;

export default HeaderKitchen;
