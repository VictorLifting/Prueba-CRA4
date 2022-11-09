import { Box, Button } from '@mui/material'
import React from 'react'
import Typography from './Typography'

export const Empty = () => {
  return (
   <Box>

    <img src="./imgs/none.png" alt="img" />

    <Typography>
    Aún no has creado ninguna campaña. ¿Qué estás esperando?  Haz click en el bóton de abajo.
    </Typography>
    <Button 
              onClick={{}}
              type="button"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear campaña
    </Button>
    </Box>
  )
}
