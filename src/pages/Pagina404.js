import React, {useState} from "react";
import Logo from "../components/Logo";
import ErrorModal from "../components/ModalError";


function Pagina404() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const message = "errou"

    return (
        <main>
            <Logo />
            <p>
                Ops, essa ágina não existe!
            </p>
            <button onClick={() => setIsModalVisible(true)}>eita</button>
            {isModalVisible ? ( 
            <ErrorModal onClose={() => setIsModalVisible(false)}>
                {message}
            </ErrorModal>
            ) : null}
        </main>
    );
}

export default Pagina404;