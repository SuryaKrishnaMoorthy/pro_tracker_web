import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Box,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { loginUser } from "./authThunks";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn } = useSelector((state) => state.auth);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;
    await dispatch(loginUser({ email, password }));
    props.showSnack();
    navigate("/tasks");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 10 }}>
      <TextField
        id="email"
        margin="normal"
        required
        fullWidth
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        variant="standard"
        onChange={handleChange}
        sx={{ color: "#191654" }}
      />
      <FormControl
        variant="standard"
        fullWidth
        required
        type="password"
        id="password"
        autoComplete="current-password"
      >
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          name="password"
          onChange={handleChange}
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        sx={{ mt: 2 }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "rgb(129,206, 175)" }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link
            href="#"
            variant="body2"
            sx={{ textDecoration: "none", color: "#191654" }}
          >
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="#"
            variant="body2"
            sx={{ textDecoration: "none", color: "#191654" }}
            onClick={props.showSignUpPage}
          >
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
