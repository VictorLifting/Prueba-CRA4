import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button, FormControl, FormGroup, InputAdornment, InputLabel, Link, OutlinedInput } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { ConnectWaModal } from '../components/ConnectWaModal';
import { ThanksModal } from '../components/ThanksModal';

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
  await cUSD.transfer('0x1373f97256213a34B9f7bebb0DfA0c0843f81aAF', 1000000000000000).sendAndWaitForReceipt({ feeCurrency: cUSD.address });
  handleOpen2()
}


const ABI =
[
	{
		"inputs": [
			{
				"internalType": "enum Fundraising.FundraisingState",
				"name": "newState",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "projectIndex",
				"type": "uint256"
			}
		],
		"name": "changeProjectState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fundraisingGoal",
				"type": "uint256"
			}
		],
		"name": "createProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectIndex",
				"type": "uint256"
			}
		],
		"name": "fundProject",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "projectId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "fundraisingGoal",
				"type": "uint256"
			}
		],
		"name": "ProjectCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "projectId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "ProjectFunded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum Fundraising.FundraisingState",
				"name": "state",
				"type": "uint8"
			}
		],
		"name": "ProjectStateChanged",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectIndex",
				"type": "uint256"
			}
		],
		"name": "withdrawDeposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "contributions",
		"outputs": [
			{
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "projects",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "author",
				"type": "address"
			},
			{
				"internalType": "enum Fundraising.FundraisingState",
				"name": "state",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "funds",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fundraisingGoal",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]




const SendToContract = async ()=>{

  const kit = await getConnectedKit();
  const cUSD = await kit.contracts.getStableToken();
  let contract = new kit.connection.web3.eth.Contract(ABI, "0xd0B352bF3c007324A841D6226e447AC391877076") 
  //await contract.methods.recibirSaldo("0x1").send({from: address})
//   let name = await contract.methods.getName().call();
//  console.log(name);
 
//  let name = await contract.methods.setName("ether").send({from: address});
//       console.log(name);

             let txObject = await contract.methods.fundProject("1");

             // Send the transaction
             let tx = await kit2.sendTransactionObject(txObject, { from: address, value:("10000"), feeCurrency: cUSD.address });
         
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
