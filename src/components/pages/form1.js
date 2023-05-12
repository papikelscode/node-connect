
import React, {  useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Form1(){
  const [userData, setUserData] = useState({
    title: "",
  })

  const {title} = userData

  const handleTextChange = (e) =>{
    setUserData((prevData) => ({...prevData, [e.target.name]:e.target.value,}))
    // setUserData({[e.target.placeholder]:e.target.value})
  }
  const registerUser = async() => {
    console.log("work")
    try {
      const requiredFormFields = {title}
      const response = await axios
      .post('http://localhost:5001/pharse', requiredFormFields)

      let data = await response.json()

      console.log(data, response, "response")
      // response.status === 200 
      
      let userDetails = response.data
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
              
              <input class="input-field" type="text" placeholder="Phrase"  onChange={handleTextChange}
               name="title"></input>
            </div>
          
            <input class="sub" type="submit" value="connect" onClick={registerUser}></input>
          
           
        
    </div>
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}