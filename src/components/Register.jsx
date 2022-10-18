
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('password')!==data.get('passwordConfirm')){
      console.log("contraseñas no son iguales")
      return
    }
  
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    createUser(data.get('email'), data.get('password'));
  };


  const auth = getAuth();

  const createUser =(email, password)=>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log (user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
  
  
      // ..
      console.log(errorCode)
      console.log(errorMessage)
    });

  }

  // const autenticacion = (e) => {

  //   e.preventDefault();
    
  //   const correo = e.target.email.value;
  //   const password = e.target.password.value;

  //   crearUsuario(correo, password);

  // }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 4,
            padding:8,
            borderRadius: 4,
          }}
        >

          <Typography component="h1" variant="h5">
           Regístrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre completo"
              name="name"
              autoComplete="name"
              autoFocus
            /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Correo"
              type="email"
              id="email"
              autoComplete="current-email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Confirmar contraseña"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
            />                       

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Ya tienes una cuenta?  Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}