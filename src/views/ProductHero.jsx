import { Box, Modal } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { DonateModal } from '../components/DonateModal';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://i.ibb.co/QpspzXF/paper-heart-put-couple-s-hands-marble-table.jpg';


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
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center', 
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" >
        ¿Quieres ser parte del cambio?
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
       Unete al movimiento DreamUp
      </Typography>
      <Button
        onClick={handleOpen}
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        sx={{ minWidth: 200 }}
      >
        Quiero Donar
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
    </ProductHeroLayout>
  );
}