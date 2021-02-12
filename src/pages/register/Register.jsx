import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const formFields = [
    {
        id: 'name',
        placeholder: 'Nome',
        type: 'text',
    },
    {
        id: 'email',
        placeholder: 'E-mail',
        type: 'text',
    },
    {
        id: 'password',
        placeholder: 'Password',
        type: 'password',
    },
    {
        id: 'role',
        placeholder: 'Role',
        type: 'text',
    },
    {
        id: 'restaurant',
        placeholder: 'TAG Burger',
        type: 'hidden',
    },
]

const Register = () => {
    const [ response, setResponse ] = useState();
    const [ form, setForm ] = useState(
        formFields.reduce((acc, field) => {
            return {
                ...acc,
                [field.id]: '',
            };
        }, {}),
    );

    const history = useHistory();

    const gotoHall = () => {
        history.push('/Hall');
    }
    const goToKitchen = () => {
        history.push('/Kitchen');
    }

    function handleChange({target}) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        form.restaurant = 'TAG Burger'
        console.log(form)
        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            response.json();
            setResponse(response);
        })
        .then((json) => {
            if(json.role === 'salão'){
                gotoHall();
            }
            else if (json.role === 'cozinha'){
                goToKitchen();
            }
        })
    }

    return (
        <div>
            <Link to='/'>Voltar</Link>
            <h2>Crie seu registro</h2>
            <form onSubmit={handleSubmit}>
                {formFields.map(({ id, placeholder, type }) => (
                    <div key={id}>
                        <label htmlFor={id}></label>
                        <input 
                            type={type} 
                            id={id}
                            placeholder={placeholder}
                            value={form[id]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                {response && response.ok && <p>Seu registro foi criado com sucesso</p>}
                <button>Registrar</button>
            </form>
        </div>
    );
}

export default Register;