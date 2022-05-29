import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Home/Listing/Listing';



const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/Listing/:id" component={Listing}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing