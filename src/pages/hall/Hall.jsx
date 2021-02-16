import { useState, useEffect } from "react";

const Hall = () => {
    const [menu, setMenu] = useState([]);
    let token = localStorage.getItem("token");
    console.log(token)

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'access-control': 'allow-origin',
                'Content-Type': 'application/json',
                //  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBuQHRlc3RlLmNvbSIsImlkIjoyMTcsImlhdCI6MTYxMzQ0MzY4NCwiZXhwIjoxNjQ1MDAxMjg0fQ.MTu9EU6RvC4aG4_Vj1wrM2_gF-pzl28SnnFmZF6YMcQ'
                'Authorization': `${token}`

            },

        })
        // .then((response) => { 
        //     setMenu(response)
        //     console.log(response)
        //     return response.json();
        // })
        .then(response => response.json())
        .then(result => {
            setMenu(result)
            console.log(result);
        })
    })

    const dados = [];

    for (let data of menu) {
        dados.push(
            <p>{data.name}</p>
        )
    }

    return (
        <div>
            <h1>
                Aqui é Hall
            </h1>
        </div>
    )
}


export default Hall;