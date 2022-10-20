
import { useCelo } from '@celo/react-celo';
import { useCallback, useState } from 'react';
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

//firebase
import db from './firebase/firebasConfig';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from 'react';

import { getAuth, onAuthStateChanged } from "firebase/auth";




function App() {

  // //firebase user state
   const auth = getAuth();



  //onAuthStateChanged()

   const [usuario, setUsuario] = useState(null);

  useEffect((() => {
    onAuthStateChanged(auth,(user) => {
      setUsuario(user);
         
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("estas logeado con ",uid)
        
        
      } else {
        // User is signed out
        console.log("no estas logeado")
        // ...
      }
      console.log(usuario)
    })


  }), [])



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

  
useEffect(() => {

  const obtenerDatos = async() =>{
    const datos = await getDocs(collection(db,'usuarios'));
    console.log(datos.docs[0].data().first)

  }
  obtenerDatos();

}, [])


const agregarDatos = async()=>{

  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      first: "Victor",
      last: "Espejos",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}








const { getConnectedKit } = useCelo();

async function transfer() {
  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  await cUSD.transfer('0x1373f97256213a34B9f7bebb0DfA0c0843f81aAF', 1).sendAndWaitForReceipt();
}


 



  return (
<>
<Header usuario={usuario}/>
  <Routes>
  
  <Route path="/home" element={<Home/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/login" element={

    usuario ? <Home/> : <SignIn setUsuario={setUsuario} />
  
    


  }/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/campains" element={<Campains/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/instructions" element={<Instructions/>}/>
  <Route path="/infoCampain" element={<InfoCampain/>}/>
  <Route path="/helpcenter" element={<HelpCenter/>}/>

  </Routes>
  
<Footer/>

 {/* {address ? (
<div>Connected to {address}</div>
) : (
" "
)}

<button onClick={()=> address ? destroy () : connect()}>
{address? "disconnect" :"Connect"} 
</button>


{address ? (
  <button onClick={transfer}>Transfer</button>
) : (
" "
)}

{usuario ? <div>cerrar sesión </div> : <div>sin ingresar </div>}

<button onClick={agregarDatos}> agregarDatos</button> */}

</>
  );
}

export default App;
