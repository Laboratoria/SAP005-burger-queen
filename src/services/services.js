import logo from '../assets/logo.png'

const RESTAURANT = 'UrbanBistro'
const API_URL = 'https://lab-api-bq.herokuapp.com'
const API_USERS = `${API_URL}/users`
const API_AUTH = `${API_URL}/auth`
const API_PRODUCTS = `${API_URL}/products`
const API_ORDERS = `${API_URL}/orders`



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

export const getOrders = async (

) => {
  const response = await fetch(API_ORDERS, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('userToken'),
      'orderId': localStorage.getItem('orderId')
    },
  })
  return await response.json()
}

export const getAllOrders = async (

) => {
  const response = await fetch(API_ORDERS, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('userToken'),
    },
  })
  return await response.json()
}

export const openOrder = async (
  clientName,
  tableNumber,
  orderItems
) => {
  const response = await fetch(API_ORDERS, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('userToken')
    },
    body: JSON.stringify({
      'client': clientName,
      'table': tableNumber,
      'products': orderItems,
    })
  })

  return await response.json()
}

export const updateOrder = async (
  orderId,
  status
) => {
  const response = await fetch(`${API_ORDERS}/${orderId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': localStorage.getItem('userToken')
    },
    body: JSON.stringify({
      'status': status
    })
  })
  return await response.json()
}

export const getStatusDescription = (statusApi) => {
  const statusMap = {
    'pending': 'Pendente',
    'preparing': 'Preparando',
    'ready': 'Pronto',
    'delivery': 'Entregue',
  }

  return statusMap[statusApi]
}

export const getImage = (idProduct) => {
  const imageMap = {
    33: logo,
    34: 'src/img2'
  }

  return imageMap[idProduct]
}
