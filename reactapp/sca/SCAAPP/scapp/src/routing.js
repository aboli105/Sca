import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header'
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Home/Listing/Listing';
import Details from './component/Home/Details/Details';
import Mycart from './component/MYCourses/Mycart';
import Login from './component/login/loginComponent';
import Register from './component/login/registerComponent'





const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/Listing/:id" component={Listing}/>
                <Route path="/Details/:levelid" component={Details}/>
                <Route path="/Mycart" component={Mycart}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
               
                

            <Footer/>
        </BrowserRouter>
    )
}

export default Routing