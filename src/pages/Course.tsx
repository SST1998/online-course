import { useEffect } from "react";
import { useCourse } from "../store/course";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CourseLayout from "../components/pages/course/CourseLayout";
import CustomBackdrop from "../components/@core/CustomBackdrop";

const Course = () => {
  const { id } = useParams();
  const { load, setLoad, setCourses } = useCourse();

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await fetch(
          `https://18acf89d-9962-4e88-807a-5629021e967b-00-3w1ylynbxarta.worf.replit.dev/page/courses/${id}`
        );
        const data = await response.json();
        console.log(data);

        setCourses(data);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {load ? <CustomBackdrop load={load} /> : <CourseLayout />}
      </Grid>
    </Grid>
  );
};

export default Course;
