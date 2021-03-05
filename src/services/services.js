import blackCoffee from '../assets/blackCoffee.jpg'
import chips from '../assets/chips.jpg'
import cocaCola from '../assets/cocaCola.jpg'
import coffeeMilk from '../assets/coffeeMilk.jpg'
import doubleBurger from '../assets/doubleBurger.jpg'
import fanta from '../assets/fanta.jpg'
import juice from '../assets/juice.jpg'
import onionRings from '../assets/onionRings.jpg'
import sandwich from '../assets/sandwich.jpg'
import simpleBurger from '../assets/simpleBurger.jpg'
import water from '../assets/water.jpg'

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
    29: blackCoffee,
    30: coffeeMilk,
    31: sandwich,
    32: juice,
    33: simpleBurger,
    42: doubleBurger,
    51: chips,
    52: onionRings,
    53: water,
    54: water,
    55: fanta,
    56: cocaCola
  }

  return imageMap[idProduct]
}
