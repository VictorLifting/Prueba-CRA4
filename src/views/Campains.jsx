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
import { Typography } from '@mui/material';
//react router
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { EmptyCategory } from '../components/EmptyCategory';


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

     //router
     const {category} = useParams();

  const { images, isLoading } = useFetchCampains ( );

  console.log(images)

  const [campains, setCampains] = useState([]);

  let prueba= [];

  // let imagesCategory = 
  
  for (let index = 0; index < images.length; index++) {

    
   // let imagesCategory=[];

   if(images[index].Category == category){

   // images[index] = [...imagesCategory];
   //console.log("Exiiste")

   //setCampains([images[index]]);

   

   prueba.push(images[index])

   console.log(prueba)
  
   } else(console.log("no existe"))
    
  }

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

    <Container component="section" sx={{ mt: 5, mb: 10}}>
    <Typography variant={"h5"} sx={{fontFamily:"Poppins", fontWeight:"600", color:"#C58ADE"}}> 
    {category}
    </Typography>

    <Box sx={{ mt: 0, display: 'flex', flexWrap: 'wrap', }}>
    {/* {campains.map((campain) => (

          <Link component={RouterLink} to={`/infoCampain`} underline="none" color="inherit">
            <CardCampain>
          </CardCampain>
          </Link>

    ))} */}

    {
        isLoading && (<h3> Cargando... </h3>)

      }

      {prueba.length > 0 ? prueba.map((images)=>
            //<GiftItem key={images.id} 
            // title={images.title} url={images.url}
            //{...images}
            <Link component={RouterLink} to={`/infoCampain/${images.id}`} underline="none" color="inherit">
            <CardCampain data={images}/>

          </Link>
            
            
          ) : <EmptyCategory/>}
  
    
    </Box>
    </Container>
  )
}
