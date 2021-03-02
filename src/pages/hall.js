import React from 'react';
import '../App.css';
import OpeningPage from '../components/OpeningStorage/OpeningPage';
import Footer from '../components/FooterStorage/Footer';
//import {HallTst} from '../components/HallStorage/Hall';



function Hall() {
    return (
        <>
            {/*<HallTst />*/}
            <OpeningPage />
            <Footer />
        </>
    );
}

export default Hall;