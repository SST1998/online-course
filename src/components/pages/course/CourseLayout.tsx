import { Grid } from "@mui/material";
import CourseHeader from "./CourseHeader";
import CourseDetail from "./CourseDetail";

const CourseLayout = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CourseHeader />
      </Grid>
      <Grid item xs={12}>
        <CourseDetail />
      </Grid>
    </Grid>
  );
};

export default CourseLayout;
