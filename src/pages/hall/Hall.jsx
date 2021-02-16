const Hall = () => {

    let token = localStorage.getItem("token");

    fetch('https://lab-api-bq.herokuapp.com/products', {
        method: 'GET',
        headers: {
            'access-control': 'allow-origin',
            'Content-Type': 'application/json',
            //  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBuQHRlc3RlLmNvbSIsImlkIjoyMTcsImlhdCI6MTYxMzQ0MzY4NCwiZXhwIjoxNjQ1MDAxMjg0fQ.MTu9EU6RvC4aG4_Vj1wrM2_gF-pzl28SnnFmZF6YMcQ'
            'Authorization': `${token}`
        },

    })
        .then((response) => {
            console.log(response.products)
            return response.json();
        })

    return (
        <div>
            <h1>
                Aqui é Hall
            </h1>
        </div>
    )
}


export default Hall;