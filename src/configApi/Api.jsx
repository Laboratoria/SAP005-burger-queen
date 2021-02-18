export const fetchRegistry = (emailRegistry,passwordRegistry,sectorRegistry) => {

    const urlCreate = `email=${emailRegistry}&password=${passwordRegistry}&role=${sectorRegistry}&restaurant=RatatouilleBurger`;

    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlCreate
    }) 
    .then((response) => response.json())
    .then((json) => {
      localStorageSet(json)
    })
}

export const fetchLogin = (emailLogin,passwordLogin) => {

  const urlLogin = `email=${emailLogin}&password=${passwordLogin}`

  fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: urlLogin

  })
    .then((response) => response.json())
    .then((json) => {
      localStorageSet(json) 
    })
}

const localStorageSet = (json) => {
    console.log(json)
  localStorage.setItem('role',json.role)
    console.log(localStorage.getItem('role'))
  localStorage.setItem('token',json.token)
    console.log(localStorage.getItem('token'))
}