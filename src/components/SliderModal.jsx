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

                        <Typography>{imagen.title}</Typography>
                        <Typography>{imagen.description}</Typography>

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
                        variant="contained"
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
