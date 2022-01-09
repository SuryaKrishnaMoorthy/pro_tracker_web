import { CssBaseline, Grid, Paper } from "@mui/material";
import Login from "./Login";

const Layout = () => {
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
      <Grid sx={{bgcolor: "#ccc"}} item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Login />
      </Grid>
    </Grid>
  );
};

export default Layout;
