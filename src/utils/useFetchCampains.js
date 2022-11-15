import { useEffect, useState } from "react";

//firebase
import db from '../firebase/firebasConfig';
import { collection, getDocs} from "firebase/firestore";
import { Campains } from "../views/Campains";

export const useFetchCampains = () => {
    const [images, setImages] = useState([]);
    const[isLoading, setIsloading] =useState(true);

     const obtenerDatos = async() =>{
        const datos = await getDocs(collection(db,'Campains'));
        //const arreglo = datos._snapshot.docChanges;
    
        // const campains = datos.map(campain=>({
        //         date: campain.data().Date,
        //       goal: campain.data().Meta,
        //       category : campain.data().category,
        //       owner :campain.data().By,
        //       title: campain.data().name,
    
        //  }))

         //   setImages(campains);
            // setIsloading(false);

        let campains = [];
        datos.forEach(element => {
          //console.log(element.data().name);  
            //console.log(element.id)
         const date= element.data().Date;
         const goal= element.data().Meta;
         const category = element.data().category;
         const owner =element.data().By;
         const title= element.data().name;
         const id = element.id;
         const img = element.data().img;
  
          const Campain={
            Date: date,
            Goal: goal,
            Category: category,
            By: owner,
            Name: title,
            id: id,
            img: img,
              
          }

           campains.push(Campain)
           //console.log(C);
            // setImages(campains);
        //    setImages(Campain);
        //   setIsloading(false);
             
        });      
        
        setImages(campains);
        setIsloading(false);
        //console.log(images);
      }

      useEffect(()=>{
        obtenerDatos();
        },[]);
  
  return {
    images: images,
    isLoading:isLoading
  
}
}
