import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom'
// import {auth} from '../Components/FirebaseDb'

const theme = createTheme();

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
          }}
        >
          <div className="mb-6">
          <button><ArrowBackIcon/></button>
          </div>
        {/* <div>
          <button onClick={()=>history.goBack}><ArrowBackIcon/></button>
        </div> */}

         <div className="font-monster font-bold text-3xl">
             <h1>Sign up</h1>
         </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ pt:2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="standard"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />

            <div className='flex'>
            <TextField
              margin="normal"
              required
              className="w-40"
              name="password"
              label="First Name"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            /> 
            
            <div className='ml-4'>
            <TextField
              margin="normal"
              required
              className="w-40"
              name="password"
              label="Last Name"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
            /> 
            </div>
            </div>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Phone"
              type="number"
              id="password"
              autoComplete="current-password"
              variant="standard"
            />

           <div className='items-end text-end pt-2 mb-2 mx-auto'>
               <Link className='text-left' to="#">Forget Password</Link>
           
           </div>

          

            <div className='text-center pt-3  mb-2'>
            <button className="bg-red-500 h-12 text-white rounded-3xl w-80">Login</button>
            </div>
           
            <div className='text-center pt-4'>
                <h3>Or Sign with Social Account</h3>
            </div>

           <div className="text-center space-x-8 pt-9">
            <button className='w-32 font-monster font-bold h-10 rounded-3xl outline outline-offset-2 outline-2'>
              Facebook
            </button>
            
            <button className='w-32 font-monster font-bold h-10 rounded-3xl outline outline-offset-2 outline-2'>
              Twitter
            </button>
            
            <div className='pt-8 text-center'>
            <button  className='w-44 outline font-bold outline-offset-2 outline-2 font-monster h-10 rounded-3xl'>
              Google
            </button>

            <div className='pt-14'>
            <h1>Already login? <Link to="/signin">Login</Link></h1>
           
            </div>
            </div>

           </div>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}