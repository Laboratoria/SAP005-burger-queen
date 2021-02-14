import React from 'react';
import {withRouter} from 'react-router';
import Footer from './footer';
import Navbar from './navbar';

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