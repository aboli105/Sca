
 
import React from "react"; 
import './listing.css'; 
import {Link} from 'react-router-dom';
let param ;
let url;
class Listing extends React.Component { 
   
   
    constructor(props) { 
        super(props); 
        
        this.state = { 
            items: [], 
            DataisLoaded: false 
        }; 
      param =props.match.params.id
    } 
    
     
    
    
    componentDidMount() { 
        fetch( 
`https://edutech-app1.herokuapp.com/level?categoryid=${param}`) 
            .then((res) => res.json()) 
            .then((json) => { 
                console.log(json) 
               
                this.setState({ 
                    items: json,
                   
                    DataisLoaded: true 
                   
                }); 
            }) 
           
         
    } 
   
    render() { 
        
        const { DataisLoaded, items } = this.state; 
        if (!DataisLoaded) return <div> 
            <h1> Pleses wait some time.... </h1> </div> ; 
   
 
      
       
   return (
    <div>
   
        <div class="row">
            
         
    { 
            items.map((item) => ( 
                console.log(item.category),
             
              <div className="col columns ">
               <div class="tile">
        <div id="img2">
             <img src ={item.Image}/>
       </div>
       <div id="img3">   <h2>{item.level}</h2>
        <h5 >Complete Vedic Maths Level 1</h5>
         <span>Duration : {item.Duration}</span>
       <p > Price :{item.Price}</p>
  
      </div>
               
      </div>

       </div>

          
           )) 
         
    }    
    </div>
    </div>
   
    
); 
}
        
}
    
export default Listing;