export const isAuthenticated = () =>  {
    if (localStorage.getItem('TOKEN')) {
        return true
    } else {
        return false
    }
}