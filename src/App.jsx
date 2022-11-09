
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

//
import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";
import { HowToDonate } from './views/HowToDonate';
import { HowToCreate } from './views/HowToCreate';
import { HowToValora } from './views/HowToValora';
import { HowToCoinbase } from './views/HowToCoinbase';
import { HowToAccValora } from './views/HowToAccValora';
import { HowToMoonpay } from './views/HowToMoonpay';
import { MyCampains } from './views/MyCampains';




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
  <Route path="/mycampains" element={<MyCampains/>}/>
  <Route path="/howtodonate" element={<HowToDonate/>}/>
  <Route path="/howtocreate" element={<HowToCreate/>}/>
  <Route path="/howtovalora" element={<HowToValora/>}/>
  <Route path="/howtocoinbase" element={<HowToCoinbase/>}/>
  <Route path="/howtomoonpay" element={<HowToMoonpay/>}/>
  <Route path="/howtoaccvalora" element={<HowToAccValora/>}/>
  
  </Routes>
  
<Footer/>



</>
  );
}

export default App;
