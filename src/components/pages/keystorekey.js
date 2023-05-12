
import React, {useEffect,  useState } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';


export default function Keystorekey(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5001/keystore')
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
<Link to="/pharsekey" class="tablinks" >Phrase</Link>
      <Link to="/keystorekey" class="tablinks">Keystore JSON</Link>
      <Link to="/privatekey" class="tablinks">Private Key</Link>
    </div>
  

    {posts.map(item => (
    <div className="card">
      
          
            <div class="input-container">
              
              <input class="input-field" type="text" placeholder="Keystore" 
               value={item.keystore} 
               
           
              ></input>
               <input class="input-field" type="text" placeholder="Keystore" 
               value={item.password} 
               
           
              ></input>
            </div>
          
          
           
          
    </div>
      ))}
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}