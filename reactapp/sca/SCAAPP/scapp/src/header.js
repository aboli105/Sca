import React,{Component} from 'react';
import './Header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "https://sca-login-logout-app.herokuapp.com/api/auth/userinfo"

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('uName')
        sessionStorage.removeItem('uImg')
        sessionStorage.setItem('loginStatus',false)
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name || sessionStorage.getItem('uName') !==null ){
            if(sessionStorage.getItem('uName') !==null){
                let name = sessionStorage.getItem('uName')
                let image = sessionStorage.getItem('uImg')
                return(
                    <>
                    <Link to="/" className="btn btn-success">
                        Hi <img src={image} style={{height:50,width:50}}/> {name}
                    </Link> &nbsp;
                    <div className="btnlogin">
                            <button onClick={this.handleLogout} className="btn btn-danger">
                            Logout
                            </button>
                    </div>
                    </>
                )
            }
            else{
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userInfo',outArray)
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                    <div className="btnlogin">
                            <Link to="/" className="btn btn-success">
                                <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                            </Link>
                        </div> &nbsp;
                    <div className="btnlogin">
                            <button onClick={this.handleLogout} className="btn btn-danger">
                            Logout
                            </button>
                    </div>
                    </>
                )
            }

        }else{
            return(
                <>
                  
                    <div className="btnlogin">
                         <Link to="/login" className="btn btn-success">
                             <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </div> &nbsp;
                   <div className="btnlogin">
                        <Link to="/register" className="btn btn-primary">
                        <span className="glyphicon glyphicon-user"></span> Register</Link>
                   </div>
                </>
            )
        }
    }

    render(){
        return (
            

<div >
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
{/* <img src='https://i.ibb.co/QXGQyKh/SARASWATI-CAREERS-ACADEMYt-1-removebg-preview.png'></img> */}
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
  <Link to="/" class="nav-link active" aria-current="page" >Home</Link>

</li>
<li class="nav-item">
 <a class="nav-link" href="#">About us</a>
</li>
<li class="nav-item">
 <Link  to="/Mycart" className="nav-link">My Courses</Link>
</li>
<li class="nav-item">
 <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Media</a>
</li>
</ul>
</div>

          
<div id="social">
           {this.conditionalHeader()} 


       </div>


        
   
     </div>
      
     </nav>
 </div>
        )
    }

   
    
}

export default withRouter(Header)