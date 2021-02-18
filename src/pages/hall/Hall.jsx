import { useState, useEffect } from "react";

const Hall = () => {
    const [show, setShow] = useState(true)
    const [menu, setMenu] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'access-control': 'allow-origin',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        })
        .then(response => response.json())
        .then((response) => {
            setMenu(response)
        })
    })

    const data = [];
    for (const menus of menu) {
        data.push(
            <div key={menus.id}>
                <p>{menus.name}</p>
            </div>
        )
    }
    const breakfast = data.slice(0, 4);
    const allDay = data.slice(4, 29);
    return (
        <div>
            <h1>
                Aqui é Hall
            </h1>
            <div className='menus'></div>
            <div className='Cardapio'>
                <button onClick={() => setShow(true)}>Café da Manhã</button>
                <button onClick={() => setShow(false)}>Hamburgueria</button>
                {
                    show ?
                        <div>
                            {breakfast}
                        </div>
                        :
                        <div>
                            {allDay}
                        </div>
                }
            </div>
        </div>
    )
}


export default Hall;
