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
                <p>R${menus.price},00</p>
                <p>{menus.flavor}</p>
                <p>{menus.complement}</p>
                <button className='btn-adition'>+</button>
            </div>
        )
    }
    const breakfast = data.slice(0, 4);
    const allDay = data.slice(4, 29);

    

    // if (breakfast){
    //     <p>deu certo</p>
    // } else {<p>null</p>}
    return (
        <div>
            <h1>
                Aqui é Hall
            </h1>
            <p>Menu</p>
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
