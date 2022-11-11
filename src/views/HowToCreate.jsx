import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToCreate = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Haz click en crear campaña",
            description:'Haz click en el bóton “crear campaña”. Puedes encontrar este en el home o en el menú de navegación.',
            img: './imgs/instructions/HowToCreate/1.png',
        },
        {
            title: "Paso 2. Inicia sesión o regístrate.",
            description:'Para crear una campaña deberás iniciar sesión. Si aún no tienes una cuenta deberás registrarte.',
            img: './imgs/instructions/HowToCreate/2.png',
        },
        {
            title: "Paso 3. Llena el formulario.",
            description:'Una vez iniciada sesión deberás completar el formulario. Cuando este listo, haz click en “publicar”.',
            img: './imgs/instructions/HowToCreate/3.png',
        },
        {
            title: "Paso 4. Revisa que todo este correcto.",
            description:'Antes de confirmar el envío del formulario, revisa que todos los datos esten correctos. Esto debido a que una vez publicada tu campaña no podrás ni editarla ni eliminarla.',
            img: './imgs/instructions/HowToCreate/4.png',
        },

	];


  return (

    <Box sx={{marginBottom:20}}>

        <Box  sx={{px:5, pt:10}}>
        <Typography variant="h5" color="#C58ADE">¿Cómo crear a una campaña?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
