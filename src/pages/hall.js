import React from 'react';
import '../App.css';
import Footer from '../components/FooterStorage/Footer';
//import {GridMenu} from '../components/HallStorage/Grid';
import HallMenu from '../components/HallStorage/Hall'





function Hall() {
    return (
        <>  
            <HallMenu />
            {/*<GridMenu />*/}
            <Footer />
        </>
    );
}

export default Hall;