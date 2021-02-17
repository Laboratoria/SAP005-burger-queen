const isAuthenticated = () => {
    const tokenUser = localStorage.getItem('token');
    if (tokenUser != null) {
        return true;
    } else {
        return false;
    };
};

export default isAuthenticated