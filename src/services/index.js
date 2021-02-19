const RESTAURANT = 'UrbanBistro'
const API_URL = 'https://lab-api-bq.herokuapp.com'
const API_USERS = `${API_URL}/users`
const API_AUTH = `${API_URL}/auth`
const API_PRODUCTS = `${API_URL}/products`

export const createUser = async (
  userName,
  userEmail,
  userPassword,
  jobPosition
) => {
  const response = await fetch(API_USERS, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      'name': userName,
      'email': userEmail,
      'password': userPassword,
      'role': jobPosition,
      'restaurant': RESTAURANT
    })
  })

  return await response.json()
}

export const authUser = async (
  userEmail,
  userPassword
) => {
  const response = await fetch(API_AUTH, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      'email': userEmail,
      'password': userPassword
    })
  })

  return await response.json()
}

export const getProducts = async (

) => {
  const response = await fetch(API_PRODUCTS, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('userToken')
    },
  })

  return await response.json()
}