import React from 'react';
import {withRouter} from 'react-router';
import Footer from './components/footer';
// import Header from './components/navbar';

const Body = (props) => {
return(
  <>
  {/* <Header /> */}
  <main className='App'>
    {props.children}
  </main>
  <Footer />
  </>
)
}
export default withRouter(Body);