import {useState} from "react";
import ABI from "./Portfolio.json";
import Web3 from "web3";
import { contractAddress } from "../utils/contracts-config";
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
      try{
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({method:'eth_requestAccounts'});
        const contract = new web3.eth.Contract(
            ABI.abi,
            contractAddress
        );
         setConnected(false);
         saveState({web3:web3,contract:contract});
      }catch(error){
        alert("Please Install Metamask");
      }
        
      }
      return<>
      <div className="header">
        <div className="Menu">
          <div className="menuItems"><a>Home</a></div>
          <div className="menuItems"><a>Projects</a></div>
          <div className="menuItems"><a>Experience</a></div>
          <div className="menuItems"><a>Contact me</a></div>
        </div>
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}> {connected? "Connect Metamask":"Connected"}</button>
      </div>
      </>
}
export default Wallet;