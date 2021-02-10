import React from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as yup from 'yup'
import axios from 'axios'
import { history } from '../../utils/history'

const Login = () => {
    const handleSubmit = values => {
        axios.post('https://lab-api-bq.herokuapp.com/auth', values)
        .then(resp => {
            const {data} = resp
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
                        name="email"
                        className="Login-Field"/>
                    <ErrorMessage 
                        component="span" 
                        name="email"   
                        className="Login-Error">
                    </ErrorMessage>
                </div>
                <div className="Login-Group">
                    <Field
                        name="password" 
                        className="Login-Field"/>
                    <ErrorMessage
                        component="span" 
                        name="password" 
                        className="Login-Error">
                    </ErrorMessage>
                </div>
                <button className="Login-Btn" type="submit">Login</button>
            </Form>
        </Formik>
      </>
    )
}

export default Login;