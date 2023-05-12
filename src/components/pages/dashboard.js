
// import React, {  useState } from "react";
// import axios from 'axios';

import { Link } from 'react-router-dom';


export default function Dashboard(){

    return(
    
<section>
<div class="tab">
<Link to="/pharsekey" class="tablinks" >Phrase</Link>
      <Link to="/keystorekey" class="tablinks">Keystore JSON</Link>
      <Link to="/privatekey" class="tablinks">Private Key</Link>
    </div>
  


  
</section>
    
    
    

  
 
   
  
 
  

  


  

    )
}