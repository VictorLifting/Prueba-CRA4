import { Box, Button } from '@mui/material'
import React from 'react'
import Typography from './Typography'

export const Empty = () => {
  return (
   <Box sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
    }}>


    <Box component={'img'} sx={{width: '25%', mb:5}} src="./imgs/none.png" alt="img" />

    <Typography>
    Aún no has creado ninguna campaña. ¿Qué estás esperando?  Haz click en el bóton de abajo.
    </Typography>
    <Button 
              onClick={{}}
              type="button"
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear campaña
    </Button>
    </Box>
  )
}
