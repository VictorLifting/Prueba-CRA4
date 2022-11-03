import { Box, Typography, Button } from '@mui/material';
import React from 'react'

export const Slider = ({ imagenes }) => {

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
                        sx={{display: 'flex',p:5, }}>
                        <Box 
                        sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', marginRight:2}}>

                        <Typography>{imagen.title}</Typography>
                        <Typography>{imagen.description}</Typography>

                        <Box>
                       
                        <Button 
                        color="secondary"
                        variant="outlined"
                        onClick={anteriorImagen}>
                        Atras
                        </Button>
                        <Button
                        color="secondary"
                        variant="contained"
                        onClick={siguienteImagen}>
                        Siguiente
                        </Button>

                        </Box>

                        </Box>

                        <img key={index} src={imagen.img} alt="imagen" />

                        </Box>
                    )}

                </Box>
                            
               
                    
                
            );
        })}
       
       </Box>
);

}
