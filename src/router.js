import React from 'react';
import Login from './pages/login/index.js';
import Register from './pages/register/index.js';



/*const routeRender = () => {
    const rootDiv = document.getElementById('root');
    const routes = {
    '/': Login,
    '/register': Register,
    ;
    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', (e) => {
e.preventDefault();
verifyUserLogged((user) => {
    if (user) {
    onNavigate('/');
    loadPosts();
    } else {
    onNavigate('/login');
    }
    });
});
routeRender();
