import { FaEye} from 'react-icons/fa';
import { useState } from "react"

const Password = () => {
    const [visible, setVisiblity] = useState(false);
    
    const Icon = <FaEye icon={visible ? "eye-slash" : "eye"}
     onClick={ () => setVisiblity(visiblity => !visiblity)} /> ;
    const InputType = visible ? "text" : "password";

    return [InputType, Icon]
}

export default Password