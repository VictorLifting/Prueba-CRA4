import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Link as RouterLink} from "react-router-dom";

//firebase
import { getAuth, signOut } from "firebase/auth";

export const Header = (props) => {
  
  const auth = getAuth();

  const cerrarSesion = () => {

    signOut(auth).then(() => {
      console.log( "Sign-out successful.");
    
  }).catch((error) => {
    // An error happened.
    console.log(error)
    
  });};

  console.log( "logeado desde el header con: ", props.usuario);
 

  return (
    <>
    <header>

        <Box          
         sx={{
            display: 'flex',
            alignItems: 'center',
          }}>

      <Link component={RouterLink} to="/Home" underline="none" color="inherit" marginLeft={5} className="logo">
    
        <svg width="136" height="29" viewBox="0 0 136 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12.9655C0 11.4007 0.313088 10.0315 0.939265 8.85791C1.56544 7.66567 2.42183 6.74356 3.50843 6.09156C4.61345 5.43955 5.84738 5.11355 7.21024 5.11355C8.38892 5.11355 9.48473 5.39298 10.4977 5.95184C11.5106 6.49207 12.2841 7.20927 12.8182 8.10345V0H15.3597V20.6778H12.8182V17.7996C12.3209 18.7124 11.5843 19.4669 10.6082 20.063C9.63207 20.6405 8.49022 20.9292 7.18261 20.9292C5.83817 20.9292 4.61345 20.5939 3.50843 19.9233C2.42183 19.2527 1.56544 18.3119 0.939265 17.1011C0.313088 15.8902 0 14.5117 0 12.9655ZM12.8182 12.9935C12.8182 11.8385 12.588 10.8325 12.1276 9.97562C11.6671 9.1187 11.041 8.4667 10.249 8.01962C9.47552 7.5539 8.61913 7.32104 7.67987 7.32104C6.74061 7.32104 5.88422 7.54459 5.11071 7.99167C4.33719 8.43876 3.72023 9.09076 3.2598 9.94768C2.79938 10.8046 2.56917 11.8105 2.56917 12.9655C2.56917 14.1391 2.79938 15.1637 3.2598 16.0392C3.72023 16.8962 4.33719 17.5575 5.11071 18.0232C5.88422 18.4703 6.74061 18.6938 7.67987 18.6938C8.61913 18.6938 9.47552 18.4703 10.249 18.0232C11.041 17.5575 11.6671 16.8962 12.1276 16.0392C12.588 15.1637 12.8182 14.1484 12.8182 12.9935Z" fill="#9572CE"/>
        <path d="M22.1219 7.85196C22.5639 6.97641 23.1901 6.29647 24.0005 5.81213C24.8292 5.32778 25.8329 5.08561 27.0116 5.08561V7.71224H26.3486C23.5308 7.71224 22.1219 9.25842 22.1219 12.3508V20.6778H19.608V5.36504H22.1219V7.85196Z" fill="#9572CE"/>
        <path d="M43.7263 12.4346C43.7263 12.9189 43.6987 13.4312 43.6434 13.9715H31.5435C31.6356 15.4804 32.142 16.6633 33.0629 17.5202C34.0022 18.3585 35.1348 18.7776 36.4608 18.7776C37.5474 18.7776 38.4499 18.5262 39.1681 18.0232C39.9048 17.5016 40.4205 16.8123 40.7151 15.9554H43.4224C43.0173 17.4271 42.2069 18.6286 40.9914 19.56C39.7759 20.4728 38.2657 20.9292 36.4608 20.9292C35.0243 20.9292 33.7351 20.6032 32.5933 19.9512C31.4698 19.2992 30.5858 18.3771 29.9412 17.1849C29.2966 15.974 28.9743 14.5769 28.9743 12.9935C28.9743 11.41 29.2874 10.0222 29.9136 8.82996C30.5398 7.63773 31.4146 6.72493 32.538 6.09156C33.6799 5.43955 34.9875 5.11355 36.4608 5.11355C37.8973 5.11355 39.1681 5.43024 40.2731 6.06361C41.3781 6.69699 42.2253 7.57253 42.8147 8.69025C43.4224 9.78933 43.7263 11.0375 43.7263 12.4346ZM41.1295 11.9037C41.1295 10.935 40.9177 10.106 40.4941 9.41676C40.0705 8.70888 39.4904 8.17796 38.7537 7.82402C38.0355 7.45144 37.2343 7.26516 36.3503 7.26516C35.0795 7.26516 33.9929 7.67499 33.0905 8.49465C32.2065 9.3143 31.7 10.4507 31.5711 11.9037H41.1295Z" fill="#9572CE"/>
        <path d="M46.1053 12.9655C46.1053 11.4007 46.4184 10.0315 47.0446 8.85791C47.6708 7.66567 48.5272 6.74356 49.6138 6.09156C50.7188 5.43955 51.9435 5.11355 53.2879 5.11355C54.614 5.11355 55.765 5.4023 56.7411 5.97978C57.7172 6.55727 58.4447 7.28379 58.9235 8.15933V5.36504H61.4651V20.6778H58.9235V17.8276C58.4263 18.7218 57.6804 19.4669 56.6859 20.063C55.7098 20.6405 54.5679 20.9292 53.2603 20.9292C51.9159 20.9292 50.7004 20.5939 49.6138 19.9233C48.5272 19.2527 47.6708 18.3119 47.0446 17.1011C46.4184 15.8902 46.1053 14.5117 46.1053 12.9655ZM58.9235 12.9935C58.9235 11.8385 58.6933 10.8325 58.2329 9.97562C57.7725 9.1187 57.1463 8.4667 56.3544 8.01962C55.5809 7.5539 54.7245 7.32104 53.7852 7.32104C52.8459 7.32104 51.9896 7.54459 51.216 7.99167C50.4425 8.43876 49.8256 9.09076 49.3651 9.94768C48.9047 10.8046 48.6745 11.8105 48.6745 12.9655C48.6745 14.1391 48.9047 15.1637 49.3651 16.0392C49.8256 16.8962 50.4425 17.5575 51.216 18.0232C51.9896 18.4703 52.8459 18.6938 53.7852 18.6938C54.7245 18.6938 55.5809 18.4703 56.3544 18.0232C57.1463 17.5575 57.7725 16.8962 58.2329 16.0392C58.6933 15.1637 58.9235 14.1484 58.9235 12.9935Z" fill="#9572CE"/>
        <path d="M83.9185 5.08561C85.0972 5.08561 86.147 5.3371 87.0678 5.84007C87.9887 6.32441 88.7161 7.06024 89.2502 8.04756C89.7843 9.03488 90.0514 10.2364 90.0514 11.6522V20.6778H87.5651V12.0155C87.5651 10.4879 87.1875 9.32362 86.4324 8.52259C85.6957 7.70293 84.692 7.2931 83.4212 7.2931C82.1136 7.2931 81.0731 7.72156 80.2996 8.57847C79.5261 9.41676 79.1393 10.6369 79.1393 12.239V20.6778H76.653V12.0155C76.653 10.4879 76.2755 9.32362 75.5204 8.52259C74.7837 7.70293 73.78 7.2931 72.5092 7.2931C71.2016 7.2931 70.161 7.72156 69.3875 8.57847C68.614 9.41676 68.2273 10.6369 68.2273 12.239V20.6778H65.7134V5.36504H68.2273V7.57253C68.7245 6.7715 69.3875 6.15676 70.2163 5.7283C71.0635 5.29984 71.9935 5.08561 73.0065 5.08561C74.2772 5.08561 75.4007 5.37435 76.3768 5.95184C77.3529 6.52933 78.0803 7.37693 78.5592 8.49465C78.9828 7.41419 79.6826 6.5759 80.6587 5.97978C81.6348 5.38367 82.7214 5.08561 83.9185 5.08561Z" fill="#9572CE"/>
        <path d="M97.7664 1.1736V13.2449C97.7664 14.5676 98.1071 15.5828 98.7885 16.2907C99.47 16.98 100.428 17.3246 101.662 17.3246C102.914 17.3246 103.881 16.98 104.562 16.2907C105.244 15.5828 105.584 14.5676 105.584 13.2449V1.1736H109.48V13.217C109.48 14.8749 109.12 16.2814 108.402 17.4364C107.702 18.5727 106.754 19.4296 105.557 20.0071C104.378 20.5846 103.061 20.8734 101.606 20.8734C100.17 20.8734 98.8622 20.5846 97.6835 20.0071C96.5233 19.4296 95.6024 18.5727 94.921 17.4364C94.2396 16.2814 93.8988 14.8749 93.8988 13.217V1.1736H97.7664Z" fill="#533288"/>
        <path d="M117.084 7.43282C117.581 6.72493 118.263 6.13813 119.128 5.67241C120.012 5.18807 121.016 4.9459 122.139 4.9459C123.447 4.9459 124.626 5.2719 125.675 5.9239C126.744 6.5759 127.582 7.50733 128.189 8.71819C128.816 9.91042 129.129 11.2983 129.129 12.8817C129.129 14.4651 128.816 15.8716 128.189 17.1011C127.582 18.3119 126.744 19.2527 125.675 19.9233C124.626 20.5939 123.447 20.9292 122.139 20.9292C121.016 20.9292 120.021 20.6964 119.156 20.2307C118.309 19.765 117.618 19.1782 117.084 18.4703V28.0547H113.216V5.19738H117.084V7.43282ZM125.178 12.8817C125.178 11.9503 124.985 11.1492 124.598 10.4786C124.23 9.78934 123.732 9.26773 123.106 8.91379C122.499 8.55985 121.836 8.38288 121.117 8.38288C120.417 8.38288 119.754 8.56916 119.128 8.94173C118.52 9.29568 118.023 9.81728 117.636 10.5065C117.268 11.1958 117.084 12.0061 117.084 12.9376C117.084 13.869 117.268 14.6793 117.636 15.3686C118.023 16.0579 118.52 16.5888 119.128 16.9614C119.754 17.3153 120.417 17.4923 121.117 17.4923C121.836 17.4923 122.499 17.306 123.106 16.9334C123.732 16.5608 124.23 16.0299 124.598 15.3407C124.985 14.6514 125.178 13.8317 125.178 12.8817Z" fill="#533288"/>
        <path d="M133.652 20.8734C132.952 20.8734 132.372 20.6591 131.911 20.2307C131.469 19.7836 131.248 19.234 131.248 18.582C131.248 17.93 131.469 17.3898 131.911 16.9614C132.372 16.5143 132.952 16.2907 133.652 16.2907C134.333 16.2907 134.895 16.5143 135.337 16.9614C135.779 17.3898 136 17.93 136 18.582C136 19.234 135.779 19.7836 135.337 20.2307C134.895 20.6591 134.333 20.8734 133.652 20.8734Z" fill="#533288"/>
        </svg>
       
       </Link>

        <Link href="#" underline="none" color="inherit" marginLeft={5}>
        {'Sobre DreamUp'}
        </Link>

        <Link component={RouterLink} to="/categories" underline="none" color="inherit" marginLeft={5}>
        {'Campañas'}
        </Link>

        <Link component={RouterLink} to="/helpcenter" underline="none" color="inherit" marginLeft={5}>
        {'Centro de ayuda'}
        </Link>

        </Box>


        <Box          
         sx={{
            display: 'flex',
            alignItems: 'center',
          }}>

        <Link component={RouterLink} to="/create" underline="none" color="inherit" marginLeft={5}>
        {'Crear campaña'}
        </Link>

        <Link component={RouterLink} to="/categories" underline="none" color="inherit" marginLeft={5} marginRight={5}>
        {'Donar'}
        </Link>

        {props.usuario ? 
        <Button 
            size="small"
            variant="contained"	
            onClick={cerrarSesion}
          >
			  	Cerrar sesión
		  	</Button>
          :
        <Link 
        component={RouterLink} 
        to="/login" underline="none" 
        color="inherit" 
        marginLeft={5}>
        {'Iniciar sesión'}
        </Link>
        
        }

        
</Box>




    </header>
    </>
  )
}
