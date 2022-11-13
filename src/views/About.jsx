import { Box } from '@mui/material'
import React from 'react'
import Typography from '../components/Typography'

export const About = () => {

  return (

    <Box sx={{p:15}}>
        <Typography variant={'h4'} color={'#C58ADE'}>
        Sobre nosotros
        </Typography>

        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}} >

        <Box sx={{width:'50%'}}>
        <Typography variant={'h6'}>
            Misión
        </Typography>
        <Typography>
            DreamUp es una iniciativa que surge como solución a
            la recaudación y donación de fondos de manera transparente,
            segura y confiable. Le apuntamos a un futuro en donde las personas
            puedan tanto crear y donar a campañas sin tener que estar preocupados
            por su dinero y/o los intermediarios.
        </Typography>

        </Box>

        <Box 
        component="img"
        src={"./imgs/about/Diagrama.png"}
        alt="img">

        </Box>

        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>

        <Box
        component="img"
        src={"./imgs/about/img.png"}
        alt="img">
        
        </Box>
        <Box sx={{width:'50%'}}>
            <Typography variant={'h6'}>
            ¿Por qué cripto?
            </Typography>
            <Typography>
            Utilizamos la tecnología blockchain, en específico la red de CELO y su moneda celo dólar (CUSD),
            para poder llevar a cabo una trazabilidad de manera transparente de cada una de las donaciones.
            Si quieres saber más sobre la red de CELO y el celo dólar te invitamos a ver nuestra sección de
            preguntas frecuentes. 
            </Typography>
        </Box>

        </Box>

    </Box>

  )
}
