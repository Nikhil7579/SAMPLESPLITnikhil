import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { usersignup } from "../../../../api/config";

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
  let history = useHistory();
  const classes = useStyles();
  let [data, updateData] = useState({ username: '', email: '', password: '' });
  let [formErrors, setformErrors] = useState({});
  let [isSubmit, setIsSubmit] = useState(false);
  const display = (e) => {
    updateData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    SingUpApi();
    setformErrors(validate(data));
    setIsSubmit(true);
  };
  const SingUpApi = () => {
    axios(
      {
        url: `${usersignup}`,
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
          // window.location.href="/userlogin";
          history.push('/userlogin')
        }
      })
      .catch((err) => {
        console.log(err);

      })
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  })
  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is Required ! ";
    }
    if (!values.email) {
      errors.email = "Email is Required ! ";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email formate"
    }
    if (!values.password) {
      errors.password = "Pasword is Required ! ";
    } else if (values.password < 6) {
      errors.password = "password must be more than 6 characters"
    }

    return errors;
  }

  return (
    <Container component="main" maxWidth="xs">
      {/* {Object.keys(formErrors).length === 0 && isSubmit && (
                )} */}
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
              <p style={{ color: 'red' }} >{formErrors.username}</p>

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
              <p style={{ color: 'red' }} >{formErrors.email}</p>

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
              <p style={{ color: 'red' }} >{formErrors.password}</p>

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