import { Box } from "@mui/system";
import { SliderHome } from "./SliderHome";
import Typography from "./Typography";


export const CarrouselHome = () => {
  const mockImagenes = [

    {
        title: "Descarga Valora y crea una cuenta",
        description:'Valora es una billetera virtual que te permitirá donar en minutos a cada una de  las campañas que desees. Aquí podrás almacenar tus dólares digitales.',
        img: './imgs/instructions/HomeCarrusel/1.png',
    },
    {
        title: "Agrega fondos a tu billetera",
        description:'Para poder realizar tus donaciones necesitarás celo dólar (CUSD), una moneda digital cuyo valor es igual al dólar estadounidense. A través de Valora podrás comprar esta moneda.',
        img: './imgs/instructions/HomeCarrusel/2.png',
    },
    {
        title: "Conecta tu billetera con dreamUp y dona!",
        description:'Una vez recargados tus fondos, conecta tu billetera (Valora) con dreamUp y envía tus celo dólares (CUSD) a la campaña que desees. ',
        img: './imgs/instructions/HomeCarrusel/3.png',
    },   
];
  return (

  
    // <Box    

    // sx={{
    //    display: 'flex',
    //    paddingX:30, 
    //    mb:20 

    //  }}>


    //     <Box>
    //       <img src="./imgs/e-wallet.png" alt="" />

    //     </Box>
    //     <Box sx={{
    //         p:4,
    //     }}>
    //     <Box sx={{
    //         display: 'flex'
    //     }}>
    //     <strong style={{fontSize:"30px"}}> Descarga Valora y crea una cuenta </strong>
    //     </Box>
    //     <Box sx={{
    //         display: 'flex'
    //     }}>
      
    //     <p style={{fontSize:"20px"}}>Valora es una billetera virtual que te permitirá donar en minutos a cada una de las campañas que desees. Aquí podrás almacenar tus dólares digitales.</p>
    //     </Box>



    //     <Box>


    //     </Box>


    //     </Box>


    // </Box>

            <Box sx={{marginBottom:20}}>

            <Box sx={{p:0}}>
            <Typography variant="h5" sx={{ my: 10, textAlign:'center' }}>
             ¿Cómo funciona? 
            </Typography>
            </Box>
            
            <Box >
            <SliderHome imagenes={mockImagenes}/>

            </Box>


        </Box>

    
 


  )
}
