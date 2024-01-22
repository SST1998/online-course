import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Grid container spacing={5} sx={{ my: "auto" }}>
      <Grid item xs={12} sx={{ color: "#000" }}>
        <Typography variant="h3">Oops!</Typography>
        <Typography variant="h5">Course Not found</Typography>
        <Typography variant="h6">This page could not be found.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to={"/"}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#000",
              p: 2,
              borderRadius: "2rem",
              color: "#000",
              bgcolor: "unset",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#ccc",
                boxShadow: "none",
                borderColor: "#000",
              },
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Page404;
