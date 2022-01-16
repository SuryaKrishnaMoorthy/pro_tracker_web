import React, { useState } from "react";
import { Box, Grid, Paper, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";

import Login from "./Login";
import SignUp from "./SignUp";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Auth = () => {
  const authError = useSelector((state) => state.auth.error);
  const [showSignUp, setShowSignUp] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSignUp = () => {
    setShowSignUp((prevshowSignUp) => !prevshowSignUp);
  };

  const handleSnackClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={8}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        sx={{ bgcolor: "#ccc" }}
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ mt: 1, mb: 5, color: "white", textAlign: "center" }}
          >
            proTracker
          </Typography>
          {authError && (
            <>
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{
                  horizontal: "right",
                  vertical: "top",
                }}
                sx={{
                  my: "10%",
                  mx: "3%",
                  textAlign: "center",
                }}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{
                    width: "100%",
                  }}
                >
                  {authError}
                </Alert>
              </Snackbar>
            </>
          )}
          {showSignUp ? (
            <SignUp showLogin={handleSignUp} showSnack={handleSnackClick} />
          ) : (
            <Login showSignUpPage={handleSignUp} showSnack={handleSnackClick} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
