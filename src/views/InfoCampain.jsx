import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, createTheme, FormControl, FormGroup, InputAdornment, InputLabel, Link, OutlinedInput, ThemeProvider } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import { ConnectWaModal } from '../components/ConnectWaModal';
import { ThanksModal } from '../components/ThanksModal';
//contract ABI
import contractABI from '../utils/ABI'; 
//celo
import { useCelo } from '@celo/react-celo';
//react router
import { useParams } from 'react-router-dom';
//firebase
import db from '../firebase/firebasConfig';
import { collection, getDoc, doc } from 'firebase/firestore';
//firebase auth

import { getAuth } from "firebase/auth";


//loader
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { PropaneSharp } from '@mui/icons-material';
import Typography from '../components/Typography';






const Web3 = require("web3");
const ContractKit = require("@celo/contractkit");
const web3 = new Web3("https://forno.celo.org");
const kit2 = ContractKit.newKitFromWeb3(web3);







const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "1rem",

  };



export const InfoCampain = (props) => {


  const theme = createTheme({
    palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#C58ADE',
      // dark: will be calculated from palette.primary.main,
       contrastText: "#fff"
    },

    white:{
      main: '#FFFFFF',
      contrastText:'#C58ADE'
    }
  }
  });

  //uid de usuario
//const [userUid, setuserUid] = useState(null);

  
  //contract Fundraising
  const contractDreamUp ='0x99424560D568e860023CDc00025267ecf95466C1';
  //loaders
  const [openLoad, setOpenLoad] = useState(false);

  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleToggleLoad = () => {
    setOpenLoad(!openLoad);
  };

  //data campain
  const [datosCampain, setDatosCampain] = useState('')

    //router
    const {id} = useParams();

    console.log("el id es:"+id)

  //firebase
  useEffect(() => {

    const obtenerDatos = async() =>{

      const docRef = doc(db, "Campains", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().idContract);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

      setDatosCampain(docSnap.data());
      DataCampain(docSnap.data().idContract);
      
    
      
    }


    obtenerDatos();
   // GetUidUser();
   //obtenerAuth();
  
  
  }, [])


  
    //autenticación

    // const obtenerAuth = async () =>{

    //   const auth =  getAuth();

    //   setuserUid(auth.currentUser)
    //   console.log(userUid)
      
    // }



  //input valor
  const [inputValue, setInputValue] = useState('')

  //fondos recolectados en porcentaje
  const [collectedFunds, setcollectedFunds] = useState(0)

    //fondos recolectados en cusd
    const [collectedCUSD, setcollectedCUSD] = useState(0)

   const onInputChange =(event)=>{
    let inputValue = event.target.value;
     setInputValue(inputValue);
      }

  //input valor Wallet
  const [inputValueWallet, setinputValueWallet] = useState('')

   const onInputWalletChange =(event)=>{
    let inputValueWallet = event.target.value;
    setinputValueWallet(inputValueWallet);
      }

      


  //modal conectar
    const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


//modal gracias  
  const [open2, setOpen2] = useState(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  //use celo hook must always be inside the Celoprovider tree

 const { connect, address, destroy, performActions } = useCelo();


 const { getConnectedKit } = useCelo();

  async function transfer() {
  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  await cUSD.transfer('0x1373f97256213a34B9f7bebb0DfA0c0843f81aAF', (web3.utils.toWei('0.01', 'ether'))).sendAndWaitForReceipt({ feeCurrency: cUSD.address });
  handleOpen2()
}


//Obtener id del usuario(Admin)

const GetUidUser =  () => {

  

  props.usuario ? 
  
    console.log("Existe"):  console.log(" NO Existe");
  
 
  

}

//aprobar

const ApproveCUSD = async ()=>{

  if (inputValue<=0 ||  inputValue === undefined){

    console.log("seleccione un valor a donar")
    return
  }
  //Loader
  console.log("Cargando paso 1")
  handleToggleLoad()

	const kit = await getConnectedKit();
	const cUSD = await kit.contracts.getStableToken();

	const approveTx = await cUSD.approve(contractDreamUp,(web3.utils.toWei(inputValue, 'ether')))
  .send({from: address, feeCurrency: cUSD.address});
	const approveReceipt = await approveTx.waitReceipt();

 console.log(approveReceipt);
 await SendToContract();
 
}


 useEffect(()=>{
 // DataCampain();
    },[]);


const DataCampain = async ( projectIndex) =>{

  //const kit = await getConnectedKit();
  let contract = new kit2.connection.web3.eth.Contract(contractABI, contractDreamUp) 
  let data = await contract.methods.projects(projectIndex).call();
   let funds = await data.funds;
   let fundraisingGoal = await data.fundraisingGoal;
   let fundsConverted = (funds*100)/fundraisingGoal;
   setcollectedFunds(fundsConverted);
   setcollectedCUSD((funds)/1000000000000000000)
  console.log("Fondos recolectados: "+ funds +" Meta: " +fundraisingGoal+ "conversion: "+fundsConverted+"%");
}


const SendToContract = async () => {

  console.log("Cargando paso 2")
  console.log(datosCampain.idContract)
  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  let contract = new kit.connection.web3.eth.Contract(contractABI, contractDreamUp) 
  //await contract.methods.recibirSaldo("0x1").send({from: address})
//   let name = await contract.methods.getName().call();
//  console.log(name);
	//await cUSD.approve('0x61bFa7Ace4167e40A39BF8F2886d8e405E5298Fa', 1000).sendAndWaitForReceipt({ feeCurrency: cUSD.address });
//  let name = await contract.methods.setName("ether").send({from: address});
//       console.log(name);
		// //console.log(cUSD)
        let txObject = await contract.methods.fundProject(datosCampain.idContract, inputValue);

        //      // Send the transaction
      // let tx = await kit2.sendTransactionObject(txObject, { from: address, value: (web3.utils.toWei('0.5', 'ether')), feeCurrency: cUSD.address, });
			   let tx = await kit2.sendTransactionObject(txObject, { from: address, feeCurrency: cUSD.address, });

        let receipt = await tx.waitReceipt();
         console.log(receipt);
            // //          //console.log(kit)
            handleCloseLoad()
            handleOpen2()
            DataCampain(datosCampain.idContract)
    }



    //withDraw Admin

    const WithdrawFromContract = async () => {

      const kit = await getConnectedKit();
      let contract = new kit.connection.web3.eth.Contract(contractABI, contractDreamUp) 
      let txObject = await contract.methods.withdrawDeposit(inputValueWallet,datosCampain.idContract);
      let tx = await kit2.sendTransactionObject(txObject, { from: address });
      let receipt = await tx.waitReceipt();
      console.log(receipt);

    }

  return (

  <ThemeProvider theme={theme}>
    <Box    

    sx={{
       display: 'flex',
       p:10,

     }}>

                  {/* Loader */}
            <Backdrop
              sx={{ color: '#fff', zIndex: 10 }}
              open={openLoad}
              onClick={handleCloseLoad}
            >
              <CircularProgress color="inherit" />
            </Backdrop>


        <Box>

        <Typography
            color="#C58ADE"
            align="left"
           variant="h4"
          sx={{ mb: 2,fontFamily:"Poppins", fontWeight:"600" }}
        >
            {datosCampain.name}
          
            </Typography>

          <img src={datosCampain.img} alt="" width={'500px'} />

          <Box sx={{

            display: 'flex',
            justifyContent: 'space-between',
            alignItems:"center",
             mb:1
            }}> 

            <p> <strong>Creado por: </strong> {datosCampain.by} </p> 

            <Link href="https://explorer.celo.org/mainnet/address/0xd0B352bF3c007324A841D6226e447AC391877076/transactions"
            underline="none" 
            color="inherit"
            target={"_blank"}>

              <Button
              color="secondary"
              type="button"
              variant="text"
              sx={{}}>
                Ver donaciones
            </Button>
              
            
            </Link> 

            </Box>
            <p>Creada el 20 de junio de 2022</p>

        </Box>
        <Box sx={{
            p:6,
        }}>
        <Box sx={{
            display: 'flex'
        }}>
        <strong>Categoria: </strong>  
        <p> 
          &nbsp; 
          {`${datosCampain.category}`}
        
          </p>
        </Box>
        <Box sx={{
            display: 'block',
            my:2
        }}>
        <strong>Descripción: </strong> <p>  { datosCampain.description}</p>
        </Box>

        <Box>
        <strong>Meta:</strong>

        <Box sx={{
          backgroundColor:"#F2F2F2",
          height:30,
          position:'relative'

        }}>
          <Box sx={{
          backgroundColor:"#C58ADE",
          height:30,
           width:`${collectedFunds}%`,
          // width:0,
          position:'relative'
        }}>
          </Box>

        </Box>

      <p>Recaudado: ${collectedCUSD} / ${datosCampain.meta} Cusd</p>
        </Box>

        <Box>
            <FormGroup>

            {/* <FormControlLabel control={<Checkbox defaultUnChecked />} label="Acepto términos y condiciones" /> */}

            {address ? (
            " "):(<Button 
              onClick={handleOpen}
              type="button"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Quiero Donar!
            </Button>)}

            {address ? (
              <Box sx={{mb:2, mt:2}}>
              Conectado a: {address}
              </Box>
            ) : (
            " ")}

        {address ? (
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Ingesa el monto a donar es CUSD</InputLabel>
          <OutlinedInput
            value={ inputValue }
            onChange={ onInputChange }
            type="number"
            id="outlined-adornment-amount"
            //value={values.amount}
           // onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Ingesa el monto a donar es CUSD"
          />
        </FormControl>)
        : (
          " ")}



        <Box
        component="div"
          sx={{
          display: "flex",
          justifyContent:"space-between",
          alignContent:"center",
        }}
      >

        {address? 
            <Button onClick={()=> address ? destroy () : connect()} type="button"
              variant="contained"
              color="white"
              sx={{ mt: 3, mb: 2, width:"48%"}}>
                Desconectar
            </Button>
               :" "} 

            {/* {address ? (
               <Button onClick={SendToContract} type="button"
             // <Button onClick={handleOpen2} type="button"
              variant="contained" sx={{ mt: 3, mb: 2, width:"48%" }}>Donar</Button>
            ) : (
            " " )} */}

			{address ? (
               <Button onClick={ApproveCUSD} type="button"
             // <Button onClick={handleOpen2} type="button"
              variant="contained" 
              color="primary"
              sx={{ mt: 3, mb: 2, width:"48%" }}>Donar</Button>
            ) : (
            " " )}

        
      </Box>

      {/* Withdraw */}

      {address == "0xe73d1af492f60592182ca8279f700adc4cca89d5" ? (
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Ingesa la wallet para retirar el CUSD</InputLabel>
          <OutlinedInput
            value={ inputValueWallet }
            onChange={ onInputWalletChange }
            type="text"
            id="outlined-adornment-amount"
            //value={values.amount}
           // onChange={handleChange('amount')}
          //startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Wallet a donde se envía"
          />
          <Button onClick={WithdrawFromContract} type="button"
             // <Button onClick={handleOpen2} type="button"
              variant="contained" 
              color="primary"
              sx={{ mt: 3, mb: 2, width:"48%" }}>Retirar</Button>
        </FormControl>)
        : (
          " ")}

        {/* end of Withdraw */}


            </FormGroup>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <ConnectWaModal cerrar={handleClose} />
            </Box>  
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <ThanksModal/>
            </Box>  
            </Modal>



              </Box>


        </Box>


    </Box>
    </ThemeProvider>
    

  )
}
