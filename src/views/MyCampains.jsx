import React from 'react'
import { Empty } from '../components/Empty'
import Typography from '../components/Typography'
import { Campains } from './Campains'

export const MyCampains = () => {
  return (
   <>
   <Typography>
    Tus campañas
   </Typography>
   <Empty/>

   <Campains/>

   </>
  )
}
