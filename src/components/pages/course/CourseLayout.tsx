import { Grid } from "@mui/material";
import CourseHeader from "./CourseHeader";
import CourseDetail from "./CourseDetail";
import { useCourse } from "../../../store/course";
import Page404 from "../../../pages/Page404";

const CourseLayout = () => {
  const { courses } = useCourse();
  return (
    <>
      {courses ? (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <CourseHeader />
          </Grid>
          <Grid item xs={12}>
            <CourseDetail />
          </Grid>
        </Grid>
      ) : (
        <Page404 />
      )}
    </>
  );
};

export default CourseLayout;
