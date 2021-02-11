import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        id: 'restaurant',
        value: 'TAG Burger',
        type: 'hidden',
    },
    {
        id: 'role',
        placeholder: 'Password',
        type: 'checkbox',
    },
    {
        id: 'token',
        type: 'hidden',
        value: '',
    }
]

const Register = () => {
    const [ form, setForm ] = useState(
        formFields.reduce((acc, field) => {
            console.log(acc)
            return {
                ...acc,
                [field.id]: '',
            };
        }, {})
    );

    const [ response, setResponse ] = useState()

    function handleChange({target}) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify(form),
        })
        .then(response => {
            setResponse(response);
        });
    }

    return (
        <div>
            <Link to='/'>Voltar</Link>
            <h2>Crie seu registro</h2>
            <form onSubmit={handleSubmit}>
                {formFields.map(({id, placeholder, type}) => (
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
                { response && response.ok && <p>Seu registro foi criado com sucesso</p> }
                <button>Registrar</button>
            </form>
        </div>
    );
}

export default Register;