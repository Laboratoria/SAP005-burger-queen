export const BASE_URL = 'https://lab-api-bq.herokuapp.com';

export const TOKEN = (body) => {
    return {
        url: BASE_URL + '/auth',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        },
    };
}

export const USER = (token) => {
    return {
        url: BASE_URL + '/products',
        options: {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        },
    };
}