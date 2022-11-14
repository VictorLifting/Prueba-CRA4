import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CardCampain } from '../components/CardCampain';
import { Link as RouterLink} from "react-router-dom";
import Link from '@mui/material/Link';
import { useEffect } from 'react';
//firebase
import db from '../firebase/firebasConfig';
import { collection, getDocs} from "firebase/firestore";
import { useFetchCampains } from '../utils/useFetchCampains';



const campains = [
    {
      url: "./imgs/categories/educacion.png",
      title: 'Educación',
      width: '30%',
    },
    {
      url: "./imgs/categories/salud.png",
      title: 'Salud',
      width: '30%',
    },
    {
      url: "./imgs/categories/animales.png",
      title: 'Animales',
      width: '30%',
    },
    {
      url: "./imgs/categories/familiar.png",
      title: 'Familiar',
      width: '30%',
    },
    {
      url: "./imgs/categories/medioA.png",
      title: 'Medio ambiente',
      width: '30%',
    },
    {
      url: "./imgs/categories/social.png"  ,
      title: 'Social',
      width: '30%',
    },
  ];


export const Campains = () => {


  const { images, isLoading } = useFetchCampains ( );

  console.log(images)

//   useEffect(() => {

//     const obtenerDatos = async() =>{
//       const datos = await getDocs(collection(db,'Campains'));
//       datos.forEach(element => {
//         //console.log(element.data().name);

//         let date,goal,category,owner, title;



//         date= element.data().Date;
//         goal= element.data().Meta;
//         category = element.data().category;
//         owner =element.data().By;
//         title= element.data().name;

//         let Campain={
//           Date: date,
//           Goal: goal,
//           Category: category,
//           By: owner,
//           Name: title

//         }

//        campains.push(Campain)
//       });
//       console.log(campains)
  
//     }
//     obtenerDatos();
    
  
//   }, [])

//   const pintarCampains=() => {

//     campains.map((campain) => (

//       <Link component={RouterLink} to={`/infoCampain`} underline="none" color="inherit">
//         <CardCampain>
//       </CardCampain>
//       </Link>

// ))
// console.log("pinta las camps")
//   }


  return (

    <Container component="section" sx={{ mt: 8, mb: 10}}>
    <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
    {/* {campains.map((campain) => (

          <Link component={RouterLink} to={`/infoCampain`} underline="none" color="inherit">
            <CardCampain>
          </CardCampain>
          </Link>

    ))} */}

    {
        isLoading && (<h2> Cargando... </h2>)

      }

      {images.map((images)=>
            //<GiftItem key={images.id} 
            // title={images.title} url={images.url}
            //{...images}
            <Link component={RouterLink} to={`/infoCampain/${images.id}`} underline="none" color="inherit">
            <CardCampain title={images.Name}/>

          </Link>
            
            
          )}
  
    
    </Box>
    </Container>
  )
}
