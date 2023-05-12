import { Link } from 'react-router-dom';
import aion from '../assets/images/aion.png';
//import algo from '../assets/images/algo.jpg';
import authereum from '../assets/images/authereum.png';
import bitkeep from '../assets/images/bitkeep.png';
import coinomi from '../assets/images/coinomi.png';
import digitex from '../assets/images/digitex.png';
import enji from '../assets/images/enji.png';
import ethereum from '../assets/images/ethereum-classic.png';
import exodus from '../assets/images/exodus.png';
import iotex from '../assets/images/iotex.png';
//import kin from '../assets/images/kin.png';
import meta from '../assets/images/metamask.png';
// import nebulas from '../assets/images/nebulas.png';
// import nimiq from '../assets/images/nimiq.png';
// import parsiq from '../assets/images/parsiq.jpg';
import safemoon from '../assets/images/safemoon.jpg';
// import tomo from '../assets/images/tomo.png';
import trust from '../assets/images/trust.png';
import Form1 from './form1';

export default function Home(){
    return(
        <section class="bg-gray-900 text-white">
        <div
          class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Connect wallet</h2>
            <br></br>
            <h3 class="text-2xl font-bold sm:text-3xl">How it works?</h3>
            <p class="mt-4 text-gray-300">
                Multiple iOS and Android wallets support the WalletConnect protocol. Interaction between mobile apps and mobile browsers are supported via mobile deep linking
            </p>
          </div>
      
          <div id="card" class="cards mt-4 w-full grid grid-cols-3 place-items-center gap-4 lg:grid-cols-3">
          <Link to="/pharse" class="tablinks" >
          <a
            class="img-wrapper block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
          <img src={trust} alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Trust Wallet</h2>
      
              
            </a>

          </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={safemoon} alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Safemoon</h2>
      
              
            
            </a>
            </Link>

           
            <Link to="/pharse" class="tablinks" >
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={ethereum} alt=""></img>
              <h2 class="mt-4 text-xl font-bold text-white">Ethereum</h2>
      
              
            </a>

            </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={authereum} alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Authereum</h2>
      
              
            </a>
            </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={meta} alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Meta Mask</h2>
      
             
            </a>
            </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={iotex}alt=""></img>
              <h2 class="mt-4 text-xl font-bold text-white">Iotex</h2>
      
             
            </a>
            </Link>

           
          </div>
      
         
        </div>
     
        <div
        
          class=" mx-auto max-w-screen-xl  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
         
      
          <div id="card" class="cards mt-0 w-full grid grid-cols-3 place-items-center gap-4 lg:grid-cols-3">
          <Link to="/pharse" class="tablinks" >
          <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
             <img src={aion} alt="" srcset=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Aion</h2>
      
            </a>

          </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={bitkeep} alt="" srcset=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">BitKeep</h2>
      
             
            </a>
            </Link>

           
            <Link to="/pharse" class="tablinks" >

            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={digitex} alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Digitex</h2>
      
            
            </a>
            </Link>

           
            <Link to="/pharse" class="tablinks" >
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={coinomi} alt="" srcset=""></img>

              <h2 class="mt-4 text-xl font-bold text-white">Coinomi</h2>
      
           
            </a>

            </Link>

           
            <Link to="/pharse" class="tablinks" >
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={enji} alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Enji</h2>
      
           
            </a>
            </Link>

            
            <Link to="/pharse" class="tablinks" >

            <a
              class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              
            >
            <img src={exodus} alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Exodus</h2>
      
             
            </a>
            </Link>
           
          </div>
      
          
        </div>
      </section>

    )
}