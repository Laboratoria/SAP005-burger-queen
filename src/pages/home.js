import React from 'react';
import '../App.css';
import OpeningPage from '../components/OpeningPage';
import Footer from '../components/Footer';
import { createUser } from '../services/register';



function Home() {
    return (
        <>
            <OpeningPage />
            <createUser />
            <Footer />
        </>
    );
}

export default Home;