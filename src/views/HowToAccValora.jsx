import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToAccValora = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Descarga Valora",
            description:'Ingresa a la AppStore o a la PlayStore y descarga  la aplicación de Valora.',
            img: './imgs/instructions/HowToAccValora/1.png',
        },
        {
            title: "Paso 2. Abre la app y sigue el tutorial.",
            description:'Abre Valora y haz click en primeros pasos, luego haz click en crear wallet. Recuerda aceptar los términos y condiciones para continuar.',
            img: './imgs/instructions/HowToAccValora/2.png',
        },
        {
            title: "Paso 3. Completa los pasos 1 y 2.",
            description:'Ingresa tu nombre y haz click en siguiente, luego crea un PIN de 6 dígitos.',
            img: './imgs/instructions/HowToAccValora/3.png',
        },
        {
            title: "Paso 4. Completa el paso 3 y 4.",
            description:'Habilita tu Face ID si lo deseas, de lo contrario haz click en omitir. Luego, ingresa tu número celular y haz click en comenzar.',
            img: './imgs/instructions/HowToAccValora/4.png',
        },
        {
            title: "Paso 5. Valida tu número celular.",
            description:'Espera unos segundos sin salirte de la pantalla mientras validan tu número celular, luego introduce los 3 códigos que te enviaron en orden.',
            img: './imgs/instructions/HowToAccValora/5.png',
        },
        {
            title: "Paso 6. Guarda tu dirección en un lugar seguro.",
            description:'Haz click en el menú y copia o guarda la dirección de tu cuenta en lugar seguro.',
            img: './imgs/instructions/HowToAccValora/6.png',
        },

	];


  return (

    <Box sx={{marginBottom:15}}>

        <Box sx={{p:5}}>
        <Typography>¿Cómo comprar CUSD vía Moonpay?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
