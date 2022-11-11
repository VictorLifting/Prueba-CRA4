import { Box, Typography, Button } from '@mui/material';
import React from 'react'

export const SliderHome = ({ imagenes }) => {

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
                        sx={{display: 'flex', flexDirection: 'row'}}>

                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center', px:20}}>
                       
                        <Button 
                        color="secondary"
                        variant="outlined"
                        onClick={anteriorImagen}>
                        ←
                        </Button>
                        <img key={index} src={imagen.img} alt="imagen" />
                        <Box sx={{display: 'flex', flexDirection: 'column', px:5, }}>
                        <Typography 
                        color="inherit"
                        align="left"
                        variant="h4" 
                        sx={{
                            mb:3
                        }}>
                         {imagen.title}
                         </Typography>
                        <Typography>{imagen.description}</Typography>
                        </Box>
                        <Button
                        color="secondary"
                        variant="outlined"
                        onClick={siguienteImagen}>
                       →
                        </Button>

                        </Box>
                       
                

                      
                        </Box>
                    )}

                </Box>
                            
               
               
            );
        })}
       
       </Box>
       
);

}
