
import React, {useEffect,  useState } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';


export default function Privatekey(){
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        console.log("testing")
      fetch('http://localhost:5001/private')
         .then((response) => response.json())
         .then((data) => {
            console.log(data, "from data");
            setPosts(data);
         });
      
   }, []);
  
  console.log(posts)
    return(
    
<section>
<div class="tab">
<Link to="/pharse" className="tablinks" >Phrase</Link>
      <Link to="/keystore" className="tablinks">Keystore JSON</Link>
      <Link to="/private" className="tablinks">Private Key</Link>
    </div>
  

    {posts.map(item => (
    <div className="card">
      
          
            <div class="input-container">
              
              <input class="input-field" type="text" placeholder="Private key"
              value={item.pri} 
               
               
           
              ></input>
            </div>
          
          
           
          
    </div>
    ))}
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}