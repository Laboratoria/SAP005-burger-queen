import React, { useState } from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../utils/history'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =
        values => {
            axios.post('https://lab-api-bq.herokuapp.com/auth', values)
                .then(resp => {
                    setEmail('')
                    setPassword('')
                    const { data } = resp
                    if (data) {
                        localStorage.setItem('token', data)
                        history.push('/register')
                    }
                })
        }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}>
                <Form className="Login">
                    <div className="Login-Group">
                        <Field
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            name="email"
                            className="Login-Field" />
                        <ErrorMessage
                            component="span"
                            name="email"
                            className="Login-Error">
                        </ErrorMessage>
                    </div>
                    <div className="Login-Group">
                        <Field
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            name="password"
                            className="Login-Field" />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error">
                        </ErrorMessage>
                    </div>
                    <button className="Login-Btn" type="submit" onClick={(event) => handleSubmit(event)}>Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Login;