const Kitchen = () => {
    const showClient = localStorage.getItem('client');
    const showTable = localStorage.getItem('table');
    const showOrder = localStorage.getItem('order');
    const showObservation = localStorage.getItem('observation');
    
    return (
        <div>
            <h1>
                Pagina de Pedidos
            </h1>
            <div>
                <p>{showClient}{showTable}</p>
                <p>{showOrder}</p>
                <p>{showObservation}</p>
            </div>
        </div>
    )
}

export default Kitchen;