import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToValora = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Descarga Valora",
            description:'Ingresa a la AppStore o la PlayStore y descarga  la aplicación de Valora.',
            img: './imgs/instructions/HowToValora/1.png',
        },
        {
            title: "Paso 2. Entra a “agregar y retirar”",
            description:'Haz click en el menú y selecciona “agregar y retirar”.',
            img: './imgs/instructions/HowToValora/2.png',
        },
        {
            title: "Paso 3. Selecciona celo dollar.",
            description:'Luego haz click en “agregar fondos”, escoge Celo Dollar y haz click en siguiente.',
            img: './imgs/instructions/HowToValora/3.png',
        },
        {
            title: "Paso 4. Ingresa el monto que quieres recargar",
            description:'Ingresa el monto que quieres recargar en dólares y luego escoge el método de pago que desees. Nosotros te  recomendamos MoonPay.',
            img: './imgs/instructions/HowToValora/4.png',
        },
        {
            title: "Paso 5. Escoge la moneda",
            description:'Luego haz click en “agregar fondos” y escoge Celo Dollar.',
            img: './imgs/instructions/HowToValora/5.png',
        },

	];


  return (

    <Box sx={{marginBottom:20}}>

        <Box  sx={{px:5, pt:10}}>
        <Typography variant="h5" color="#C58ADE">¿Cómo recargar una cuenta en Valora?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
