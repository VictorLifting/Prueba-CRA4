import { Box } from "@mui/system"

export const CarrouselHome = () => {

  return (

  
    <Box    

    sx={{
       display: 'flex',
       paddingX:30, 
       mb:20 

     }}>


        <Box>
          <img src="./imgs/e-wallet.png" alt="" />

        </Box>
        <Box sx={{
            p:4,
        }}>
        <Box sx={{
            display: 'flex'
        }}>
        <strong style={{fontSize:"30px"}}> Descarga Valora y crea una cuenta </strong>
        </Box>
        <Box sx={{
            display: 'flex'
        }}>
      
        <p style={{fontSize:"20px"}}>Valora es una billetera virtual que te permitirá donar en minutos a cada una de las campañas que desees. Aquí podrás almacenar tus dólares digitales.</p>
        </Box>



        <Box>


        </Box>


        </Box>


    </Box>


  )
}
