//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/components/pages/Home';
import Form1 from './components/pages/form1';
import Form2 from './components/pages/form2';
import Form3 from './components/pages/form3';
import Formpages from './formpages';



function App() {
  return (
  <>
  
      <Routes>
        <Route path="/" element={<Home />} />
        
           <Route path ="/pharse" element={<Form1/>} />
            <Route path = "/keystore" element = {<Form2 />} />
            <Route path = "/private" element = {<Form3 />} />
        
        
       
      </Routes>

  </>

    
   
  );
}

export default App;
