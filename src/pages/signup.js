import React from 'react';
import '../App.css';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer';
import Register  from '../services/register';

function signUp() {
    return (
        <>
            <SignUpForm />
           
            <Footer />
        </>
    );
}

export default signUp;