import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToWithdraw = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Ingresa a mis campañas",
            description:'Inicia sesión con tu cuenta de dreamUp y ve a la sección mis campañas.',
            img: './imgs/instructions/HowToWithdraw/1.png',
        },
        {
            title: "Paso 2. Escoge la campaña",
            description:'Haz click en la campaña de la cual quieres retirar el dinero.',
            img: './imgs/instructions/HowToWithdraw/2.png',
        },
        {
            title: "Paso 3. Haz click en retirar dinero",
            description:'Haz click en “retirar dinero”. Recuerda que este botón solo estará habilitado si se ha completado el 100% de tu campaña.',
            img: './imgs/instructions/HowToWithdraw/3.png',
        },
        {
            title: "Paso 4. Introduce tu dirección",
            description:'Ingresa la dirección de tu billetera de Cobru y haz click en continuar. Si no sabes cómo funciona Cobru haz click aquí.',
            img: './imgs/instructions/HowToWithdraw/4.png',
        },
        {
            title: "Paso 5. Espera 24 horas.",
            description:'Luego de hacer click en continuar, se realizará la solicitud de retiro de tu dinero. En menos de 24 horas el dinero debería estar reflejado en tu cuenta de Cobru.',
            img: './imgs/instructions/HowToWithdraw/5.png',
        },
       
	];


  return (

    <Box sx={{marginBottom:20}}>

        <Box  sx={{px:5, pt:10}}>
        <Typography variant="h5" color="#C58ADE" sx={{fontFamily:"Poppins", fontWeight:"600"}}>¿Cómo retirar tu dinero?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
