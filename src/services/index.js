const RESTAURANT = 'UrbanBistro'
const API_URL = 'https://lab-api-bq.herokuapp.com'
const API_USERS = `${API_URL}/users`
const API_AUTH = `${API_URL}/auth`
const API_ORDERS = `${API_URL}/orders`

export const createUser = async (
  userName,
  userEmail,
  userPassword,
  jobPosition
) => {
  const response = await fetch(API_USERS, {
    method: 'post',
    headers: { 'content-type': 'application/json', 'Authorization' : '' }, 
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
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      'email': userEmail,
      'password': userPassword
    })
  })

  return await response.json()
}

export const openOrder = async (
  clientName,
  tableNumber
) => {
  const response = await fetch(API_ORDERS, {
    method: 'post',
    mode: 'cors',
    headers : { 'content-type' : 'application/json', 'Authorization' : '' },
    body: JSON.stringify({
      'client': clientName,
      'table': tableNumber
    })
  })

  return await response.json()
}

