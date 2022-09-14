// import React , {useState , useEffect} from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// // import styled from 'styled-components'

// // const form = styled.section`
// // color:green;` 

// const Usersignup = () => {

//     // const {values} = useState('')

//   //   useEffect(() => {
//   //   let errors = {};
//   //   if (!values.email) {
//   //     errors.email = 'Email address is required';
//   //   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//   //     errors.email = 'Email address is invalid';
//   //   }    
//   // },);
// // const Signup = () => {

// //     console.log(username , email , password)
// //     axios.post("http://localhost:5001/api/user/singup" , {
// //         username : username ,
// //         email: email ,
// //         password : password

// //     })
// //   .then(result => {
// //     console.log(result)     
// //     navigate("/home") 
// //   })
// // }

//   return (
//     <>
//     <div>
//       <section className="vh-100 bg-image" >

//   <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//     <div className="container h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//           <div className="card" />
//             <div className="card-body p-5">
//               <h1 className="text-uppercase text-center text-white mb-5">Sample Split</h1>
//               <form 

//               className='rounded p-4 p-sm-3'>
//                 <div className="form-outline mb-4">
//                   <input type="text" 
//                   className="form-control form-control-lg" placeholder='Your Name'              
//                   />
//                 </div>
//                 <div className="form-outline mb-4">
//                   <input type="email" 
//                   className="form-control form-control-lg" placeholder='Your Email'/>
//                 </div>
//                 <div className="form-outline mb-4">
//                   <input type="password"  
//                    className="form-control form-control-lg" placeholder='Password'/>
//                 </div>
//                 <p className="text-center text-muted mt-5 mb-0"
//                 style={{margin:100}}>Have already an account? <Link to="/home"
//                     className="fw-bold text-dark"><u>Login here</u></Link ></p>              
//                 <div className="d-flex justify-content-center">
//                   <button type="button"
//                   onClick={Signup}
//                     className="btn btn-dark btn-block btn-lg gradient-custom-4 text-white"
//                     style={{marginTop:20}}>SignUp</button>
//                 </div>              
//                 </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>      
// </section>
// </div>
// </>
//   )
// }

// export default Usersignup
// import React from "react";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const Usersignup = () => {
//     return (
//         <>
//             <h1>hello </h1>
//             <TextField
//                 id="outlined-required"
//                 label="Track Title"
//             />
//             <TextField
//                 id="outlined-required"
//                 label="Track Title"
//             />
//         </>
//     )
// }
// export default Usersignup;
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Usersignup() {
  const classes = useStyles();
  let [data, updateData] = useState({ username: '', email: '', password: '' });
  const display = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    singUpApi();
    // setformErrors(validate(data));
    // setIsSubmit(true);
  };
  const singUpApi = () => {
    axios(
      {
        url: "http://localhost:5001/api/user/singup",
        method: "post",
        header: {
          'Content-Type': 'application/json'
        },
        data: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      }
    )
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setTimeout(() => {
            window.location.href="/userlogin";
          }, 2000)
        }
      })
      .catch((err) => {
        console.log(err);

      })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={submit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                label="User Name"
                autoFocus
                value={data.username}
                onChange={display}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={data.email}
                onChange={display}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={data.password}
                onChange={display}

              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/userlogin" variant="body2">
                Already have an account? LogIn
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}