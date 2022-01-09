import { useState } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignUp";

const Layout = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUp = () => {
    setShowSignUp((prevshowSignUp) => !prevshowSignUp);
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
          {showSignUp ? (
            <SignUp showLogin={handleSignUp} />
          ) : (
            <Login showSignUpPage={handleSignUp} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;
