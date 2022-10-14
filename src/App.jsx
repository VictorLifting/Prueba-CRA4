
import { useCelo } from '@celo/react-celo';
import { useCallback } from 'react';
import { MiniContractKit } from '@celo/contractkit/lib/mini-kit';


import { Header } from "./components/Header";
import Register from "./components/Register";
import SignIn from "./components/SignIng";
import './styles.css';
import Categories from "./views/Categories";

import { Campains } from "./views/Campains";
import { Instructions } from "./views/Instructions";
import { Create } from "./views/Create";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { InfoCampain } from "./views/InfoCampain";
import Footer from "./components/Footer";
import HelpCenter from "./views/HelpCenter";



function App() {
  //use celo hook must always be inside the Celoprovider tree

 const { connect, address, destroy, performActions } = useCelo();

//  const transferAndStore = useCallback(
//    () => {
    
//     async function trasnferCUSD(){
//       const cusdTokenContract = await kit.contracts.getStableToken()
//       return await cusdTokenContract
//       .transfer(RECEIVER_ADDRESS, Web3.utils.toWei('0.00000001', 'ether'))
//       .sendAndWaitForReceipt({from:address})

//     }
//     async function anotherAction()

//    },
//    [second],
//  )


const { getConnectedKit } = useCelo();

async function transfer() {
  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  await cUSD.transfer('0x1373f97256213a34B9f7bebb0DfA0c0843f81aAF', 1).sendAndWaitForReceipt();
}


 



  return (
<>
<Header/>
  <Routes>
  
  <Route path="/home" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={<SignIn/>}/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/campains" element={<Campains/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/instructions" element={<Instructions/>}/>
  <Route path="/infoCampain" element={<InfoCampain/>}/>
  <Route path="/helpcenter" element={<HelpCenter/>}/>

  </Routes>
  
<Footer/>

 {address ? (
<div>Connected to {address}</div>
) : (
" "
)}


<button onClick={()=> address ? destroy () : connect()}>
{address? "disconnect" :"Connect"} 

</button>


<button onClick={transfer}>Transfer</button>






</>
  );
}

export default App;
