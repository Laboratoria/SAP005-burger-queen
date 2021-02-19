import React from 'react'


function createUser(name, email, password, role) {
const data = {
"email": email,
"password": password,
"role": role,
"restaurant": 'subsolo',
"name": name
};

     fetch('https://lab-api-bq.herokuapp.com/users', {
             method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
        })

}
    export default createUser;
