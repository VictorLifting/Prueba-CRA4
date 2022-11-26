import { Box, Typography, Button } from '@mui/material';
import React from 'react'

export const SliderModal = ({ imagenes }) => {

    // Variables y Estados
	const [imagenActual, setImagenActual] = React.useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};
  return (
    <Box>

        {imagenes.map((imagen, index) => {

            return (
                  

                <Box >

                    {imagenActual === index && (
                        <Box 
                        sx={{display: 'flex', flexDirection: 'column'}}>
                        <Box 
                        sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center',}}>

                        <Typography variant='h5' color="#C58ADE" sx={{mb:4, fontFamily:"Poppins", fontWeight:"600"}}>{imagen.title}</Typography>
                        <Typography sx={{mb:10, fontFamily:"Poppins"}}>{imagen.description}</Typography>

                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center' }}>
                       
                        <Button 
                        color="secondary"
                        variant="outlined"
                        onClick={anteriorImagen}>
                        ←
                        </Button>
                        <img key={index} src={imagen.img} alt="imagen" />
                        <Button
                        color="secondary"
                        variant="outlined"
                        onClick={siguienteImagen}>
                       →
                        </Button>

                        </Box>
                       
                        </Box>

                      

                        </Box>
                    )}

                </Box>
                            
               
                    
                
            );
        })}
       
       </Box>
);

}
