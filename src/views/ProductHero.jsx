import { Box, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { DonateModal } from '../components/DonateModal';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';


const backgroundImage =
  './imgs/banner.png';


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "1rem",

  };

 
export default function ProductHero() {


  //modal Donar  
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{display: 'flex', backgroundColor:'#F6F8FF',position: 'relative'}}

      // sxBackground={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundPosition: 'center', 
        
      // }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Box 
      sx={{
        p:10, width: '40%', mt:10, mb:18,
      }}>

      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="#C58ADE" align="left" variant="h3" >
       Dona de manera
      <TypewriterComponent
      onInit={(typewriter)=>{
        typewriter.typeString("Segura")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Confiable")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Transparente")
        .start();
      }}
      /> 
      </Typography>
      
      <Typography
        color="#3D3D3D"
        align="left"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 2, sm: 5 } }}
      >
       Lleva un rastreo de tus donaciones y dinero en tiempo real. Al incorporar la
       tecnología blockchain podemos crear campañas mucho más confiables y seguras.
      </Typography>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Donar ahora
      </Button>
      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            > 
            <Box sx={style}>
            <DonateModal/>
            </Box>  
            </Modal>


      </Box >

      <Box sx={{  position: 'absolute', right: 0, top: -5}}>

      <img src="./imgs/banner.png" alt="" />

      </Box>
    </Box>
  );
}