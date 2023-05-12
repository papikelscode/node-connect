import aion from '../assets/images/aion.png';
import algo from '../assets/images/algo.jpg';
import authereum from '../assets/images/authereum.png';
import bitkeep from '../assets/images/bitkeep.png';
import coinomi from '../assets/images/coinomi.png';
import digitex from '../assets/images/digitex.png';
import enji from '../assets/images/enji.png';
import ethereum from '../assets/images/ethereum-classic.png';


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
            <a
            class="img-wrapper block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src="../static/images/trust.png" alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Trust Wallet</h2>
      
              
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src="../static/images/safemoon.jpg" alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Safemoon</h2>
      
              
            
            </a>
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={ethereum} alt=""></img>
              <h2 class="mt-4 text-xl font-bold text-white">Ethereum</h2>
      
              
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={authereum} alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Authereum</h2>
      
              
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src="../static/images/metamask.png" alt=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Meta Mask</h2>
      
             
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src="../static/images/iotex.png" alt=""></img>
              <h2 class="mt-4 text-xl font-bold text-white">Iotex</h2>
      
             
            </a>
          </div>
      
         
        </div>
     
        <div
        
          class=" mx-auto max-w-screen-xl  px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
         
      
          <div id="card" class="cards mt-0 w-full grid grid-cols-3 place-items-center gap-4 lg:grid-cols-3">
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
             <img src={aion} alt="" srcset=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">Aion</h2>
      
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={bitkeep} alt="" srcset=""></img>
      
              <h2 class="mt-4 text-xl font-bold text-white">BitKeep</h2>
      
             
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={digitex} alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Digitex</h2>
      
            
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={coinomi} alt="" srcset=""></img>

              <h2 class="mt-4 text-xl font-bold text-white">Coinomi</h2>
      
           
            </a>
      
            <a
            class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="/form1.html"
          >
            <img src={enji} alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Enji</h2>
      
           
            </a>
      
            <a
              class="block rounded-xl border border-gray-800 p-4 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/form1.html"
            >
            <img src="../static/images/exodus.png" alt="" srcset=""></img>

      
              <h2 class="mt-4 text-xl font-bold text-white">Exodus</h2>
      
             
            </a>
          </div>
      
          
        </div>
      </section>

    )
}