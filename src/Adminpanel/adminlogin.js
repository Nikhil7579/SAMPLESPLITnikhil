import React , {useState} from 'react';
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

const AdminlogIn = () => {
    let [data, updateData] = useState({email: '', password: '' });
    const displayup = (e) => {
      updateData({ ...data, [e.target.name]: e.target.value });
    };
    const submitup = (e) => {
      e.preventDefault();
      LogInApi();
    };
    const LogInApi = () => {
      axios(
        {
          url: "http://localhost:5001/api/user/login",
          method: "post",
          header: {
            'Content-Type': 'application/json'
          },
          data: {
            email: data.email,
            password: data.password
          }
        }
      )
        .then((response) => {
          console.log(response);
          const logintoken = response.data.token
                localStorage.setItem('logintoken', logintoken)
                if (response.status === 200) {
                    setTimeout(() => {
                        window.location.href="/dashboard"
                    }, 2000)
                }
        })
        .catch((err) => {
          console.log(err);
  
        })
    }
    return(
        <>
        <Box sx={{marginTop:"150px"}}>
            <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" align='center'>
          LogIn
        </Typography>
        <form   noValidate onSubmit={submitup} style={{marginTop:'20px'}} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                value={data.email}
                onChange={displayup}

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
                onChange={displayup}


              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            LogIn
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/usersignup" variant="body2">
                Forgot Password?
              </Link>
            </Grid>
          </Grid>
        </form>

    </Container>
    </Box>
        </>
    )
}
export default AdminlogIn;