// ** MUI Imports
import { Grid, Typography } from "@mui/material";

// ** Custom Component Imports
import Error500Img from "../../assets/images/500.png";

const Error500 = () => {
  return (
    <Grid item xs={12} sx={{ color: "#000", mt: "auto" }}>
      <img src={Error500Img} style={{ width: "100px" }} />
      <Typography variant="h3">500</Typography>
      <Typography variant="h6">Internal Server Error!</Typography>
    </Grid>
  );
};

export default Error500;
