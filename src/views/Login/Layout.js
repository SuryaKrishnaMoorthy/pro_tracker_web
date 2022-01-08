import { Grid, Box } from "@mui/material";
// import Login from "./Login";

const Layout = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Box sx={{ bgcolor: "secondary.main", height: '100vh' }}>Left</Box>
      </Grid>
      <Grid item xs={4}>
        {/* <Login /> */}
      </Grid>
    </Grid>
  );
};

export default Layout;
