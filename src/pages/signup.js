import React from 'react';
import '../App.css';
import {SignUpForm} from '../components/FormsStorage/SignUpForm';
import Footer from '../components/FooterStorage/Footer';


function signUp() {
    return (
        <>
            <SignUpForm />
            <Footer />
        </>
    );
}

export default signUp;