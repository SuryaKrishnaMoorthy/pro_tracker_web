import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { signUpUser } from "./authThunks";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      email: values.email,
      password: values.password,
      first_name: values.firstName,
      last_name: values.lastName,
      zip_code: values.zipCode,
    };

    dispatch(signUpUser(body));
    props.showSnack();

    //dispatch create request
    // save token in local storage
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Grid container spacing={2}> 
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            name="zipCode"
            required
            fullWidth
            id="zipCode"
            label="Zip Code"
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            variant="standard"
            fullWidth
            required
            type="password"
            id="password"
            autoComplete="current-password"
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            href="#"
            variant="body2"
            sx={{ textDecoration: "none" }}
            onClick={props.showLogin}
          >
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
