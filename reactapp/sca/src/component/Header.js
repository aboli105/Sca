import React, {Component, Fragment } from "react";
import './Header.css';

class Header extends Component{
    render(){
        
        return (
            <Fragment>
            <header>
                  <div className = "logo">
                     AW Developer </div>
                     <center>  
                          <input/>
                     <div style={{color:`blue`}}>Search Here</div>
                     </center> 
                        </header>
                        <hr/>
                            </Fragment>

        ) 
        
    }
}


//const Header = () => {
 //   return (
  //      <div> 
  //   <center>
 //        <h1>
 //           AW Developer
  //          </h1> </center>
            
// <hr/>
 //       </div>
 //   )
//}
export default Header;