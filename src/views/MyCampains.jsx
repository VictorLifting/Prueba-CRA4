import { Box } from '@mui/material'
import React from 'react'
import { Empty } from '../components/Empty'
import Typography from '../components/Typography'
import { Campains } from './Campains'

export const MyCampains = () => {
  return (
   <>
   <Box sx={{p:12}}>

   
   <Typography variant='h4' color='#C58ADE' >
    Tus campañas
   </Typography>
   <Empty/>

   <Campains/>

  </Box>
   </>
  )
}
