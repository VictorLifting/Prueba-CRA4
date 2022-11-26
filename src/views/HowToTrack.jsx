import { Box } from "@mui/system"
import Typography from "../components/Typography"
import {Slider} from "../components/Slider";

export const HowToTrack = () => {

    const mockImagenes = [

        {
            title: "Paso 1. Ve a la sección campañas",
            description:'En la página de inicio de dreamUp haz click en la opción campañas del menú de navegación.',
            img: './imgs/instructions/HowToTrack/1.png',
        },
        {
            title: "Paso 2. Busca la campaña",
            description:'Busca la campaña de la cual quieres ver las donaciones y haz click en ella.',
            img: './imgs/instructions/HowToTrack/2.png',
        },
        {
            title: "Paso 3. Haz click en “ver donaciones”.",
            description:'Una vez estes en la pestaña de detalles de la campaña, haz click en ver donaciones.',
            img: './imgs/instructions/HowToTrack/3.png',
        },

       
	];


  return (

    <Box sx={{marginBottom:20}}>

        <Box  sx={{px:5, pt:10}}>
        <Typography variant="h5" color="#C58ADE" sx={{fontFamily:"Poppins", fontWeight:"600"}}>¿Cómo ver las donaciones hechas a una campaña?</Typography>

        </Box>

        <Box >
        <Slider imagenes={mockImagenes}/>

        </Box>


    </Box>

  )
}
