const RESTAURANT = "UrbanBistro"


export const createUser = async (userName, userEmail, userPassword, jobPosition) => {
  const response = await fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      "name": userName,
      "email": userEmail,
      "password": userPassword,
      "role": jobPosition,
      "restaurant": RESTAURANT
    })
  })

  return await response.json()
}