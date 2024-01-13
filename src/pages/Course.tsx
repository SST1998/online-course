import { Grid } from "@mui/material";
import "../styles/bg-course.css";
import CourseHeader from "../components/pages/course/CourseHeader";
import CourseDetail from "../components/pages/course/CourseDetail";

const Course = () => {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <CourseHeader />
        </Grid>
        <Grid item xs={12}>
          <CourseDetail />
        </Grid>
      </Grid>
    </>
  );
};

export default Course;
