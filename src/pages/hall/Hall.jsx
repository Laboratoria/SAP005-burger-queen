
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { USER } from "../../components/api";

const Hall = () => {
    const [show, setShow] = useState(true)  
    const [menu, setMenu] = useState([]);

    useEffect(async function (token) {
            const { url, options } = USER(token);
            const response = await fetch(url, options);
            const json = await response.json(); 
            setMenu(json);
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
                            <MenuCart  />
                        </div>
                    </div>
                </div>

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
                                {/* {breakfast} */}
                            </div>
                            :
                            <div>
                                {/* {allDay} */}

                            </div>
                    }
                </div>
            </div>
        )
    }

export default Hall;
