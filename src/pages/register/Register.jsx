import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Title, Form, Template, Page, Input, Button, Images, BurgerImage } from '../../stylesForm';
import Burger from '../../images/burger.png'
import Logo from '../../images/logoBranco.png'

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
        placeholder: 'Senha',
        type: 'password',
    },
    {
        id: 'role',
        placeholder: 'Você é do salão ou da cozinha?',
        type: 'text',
    }
]

const Register = () => {
    const [response, setResponse] = useState();
    const [form, setForm] = useState(
        formFields.reduce((acc, field) => {
            return {
                ...acc,
                [field.id]: '',
                restaurant: 'TAG Burger'
            };
        }, {}),
    );
    console.log(form)
    const history = useHistory();
    const goToHall = () => {
        history.push('/Hall');
    }
    const goToKitchen = () => {
        history.push('/Kitchen');
    }
    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            .then(response => {
                console.log(response)
                if (response.role === 'salao') {
                    goToHall();
                }
                else if (response.role === 'cozinha') {
                    goToKitchen();
                }
                setResponse(response);
            })
    }

    return (

        <Page>
            <Link to='/'>
                <button
                    style={{
                        'padding': '15px',
                        'margin': '30px',
                        'width': '60px',
                        'height': '60px',
                        'backgroundColor': '#F57F17',
                        'borderRadius': '100%',
                        'border': 'none',
                        'outlineColor': '#F57F17',
                        'textAlign': 'center',
                        'fontSize': '30px',
                        'cursor': 'pointer'
                    }}
                >
                    <FiArrowLeft />
                </button>
            </Link>
            <Form onSubmit={handleSubmit}>
                <Title>Crie seu registro</Title>
                {formFields.map(({ id, placeholder, type }) => (
                    <div key={id}>
                        <Input
                            type={type}
                            id={id}
                            placeholder={placeholder}
                            value={form[id]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                {response && response.ok && <p>Seu registro foi criado com sucesso</p>}

                <Button>Registrar</Button>
            </Form>
            <Template>
                <Images>
                    <img src={Logo} alt='' />
                    <BurgerImage src={Burger} alt='' />
                </Images>
            </Template>
        </Page>
    );
}

export default Register;
