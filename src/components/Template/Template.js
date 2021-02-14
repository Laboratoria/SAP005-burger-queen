import React from 'react';
import {withRouter} from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Body = (props) => {
return(
  <>
  <Navbar />
  <main className='App'>
    {props.children}
  </main>
  <Footer />
  </>
)
}
export default withRouter(Body);