import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormGroup, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { ConnectWaModal } from '../components/ConnectWaModal';
import { ThanksModal } from '../components/ThanksModal';
//contract ABI
import contractABI from '../utils/ABI';
//celo
import { useCelo } from '@celo/react-celo';


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



export const InfoCampain = () => {

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


const ApproveCUSD = async ()=>{
	const kit = await getConnectedKit();
	const cUSD = await kit.contracts.getStableToken();

	const approveTx = await cUSD.approve('0x513f65A1656c7868F860BFe5d20B6c4f739D714f', 10000).send({feeCurrency: cUSD.address})
	const approveReceipt = await approveTx.waitReceipt()

	console.log(approveReceipt)
}


const SendToContract = async ()=>{

  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  let contract = new kit.connection.web3.eth.Contract(contractABI, "0x513f65A1656c7868F860BFe5d20B6c4f739D714f") 
  //await contract.methods.recibirSaldo("0x1").send({from: address})
//   let name = await contract.methods.getName().call();
//  console.log(name);
	//await cUSD.approve('0x61bFa7Ace4167e40A39BF8F2886d8e405E5298Fa', 1000).sendAndWaitForReceipt({ feeCurrency: cUSD.address });
//  let name = await contract.methods.setName("ether").send({from: address});
//       console.log(name);
		// //console.log(cUSD)
            let txObject = await contract.methods.fundProject("1", 1);

        //      // Send the transaction
      // let tx = await kit2.sendTransactionObject(txObject, { from: address, value: (web3.utils.toWei('0.5', 'ether')), feeCurrency: cUSD.address, });
			 let tx = await kit2.sendTransactionObject(txObject, { from: address, feeCurrency: cUSD.address, });

           let receipt = await tx.waitReceipt();
         console.log(receipt);
            // //          //console.log(kit)

    }







  return (


    <Box    

    sx={{
       display: 'flex',
       p:10,

     }}>


        <Box>
            <h2>Salva a Roco</h2>
          <img src="./imgs/roco.png" alt="" />

          <Box sx={{

            display: 'flex',
            justifyContent: 'space-between'
            }}> 

            <p>Creado por: Juan Pérez</p> 

            <Link href="https://explorer.celo.org/mainnet/address/0xd0B352bF3c007324A841D6226e447AC391877076/transactions"
            underline="none" 
            color="inherit"
            target={"_blank"}>
              {"Ver donaciones" } 
            
            </Link> 

            </Box>
            <p>Creada el 20 de junio de 2022</p>

        </Box>
        <Box sx={{
            p:4,
        }}>
        <Box sx={{
            display: 'flex'
        }}>
        <strong>Categoria: </strong> <p> Animales</p>
        </Box>
        <Box sx={{
            display: 'flex'
        }}>
        <strong>Descripción: </strong> <p>Ayudenme a salvar a mi gato Rocco. Ha sido diagnosticado con una enfermadad muy grave y hay que operar. Sin embargo mi familia no posee con los recursos necesarios para la operación y la hospitalización. </p>
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
          width:"30%",
          position:'relative'
        }}>
          </Box>

        </Box>

      <p>Recaudado: $200.000/2.000.000</p>
        </Box>

        <Box>
            <FormGroup>

            {/* <FormControlLabel control={<Checkbox defaultUnChecked />} label="Acepto términos y condiciones" /> */}

            {address ? (
            " "):(<Button 
              onClick={handleOpen}
              type="button"
              variant="contained"
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
              variant="outlined"
              sx={{ mt: 3, mb: 2, width:"48%"}}>
                Desconectar
            </Button>
               :" "} 

            {address ? (
               <Button onClick={SendToContract} type="button"
             // <Button onClick={handleOpen2} type="button"
              variant="contained" sx={{ mt: 3, mb: 2, width:"48%" }}>Donar</Button>
            ) : (
            " " )}

			{address ? (
               <Button onClick={ApproveCUSD} type="button"
             // <Button onClick={handleOpen2} type="button"
              variant="contained" sx={{ mt: 3, mb: 2, width:"48%" }}>Aprovar</Button>
            ) : (
            " " )}

        
      </Box>


            </FormGroup>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <ConnectWaModal/>
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

    

  )
}
