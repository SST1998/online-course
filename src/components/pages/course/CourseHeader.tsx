import { Box, Container, Slide, Typography } from "@mui/material";
import "../../../styles/bg-course.css";
import { useCourse } from "../../../store/course";
import { CourseType } from "../../../types/courses";

const CourseHeader = () => {
  const { courses } = useCourse();
  const { img, name, description } = courses as CourseType;

  return courses ? (
    <div className="wrap-bg" style={{ backgroundImage: `url(${img})` }}>
      <Container maxWidth="lg" className="text-relative">
        <Box>
          <Slide direction="right" in {...{ timeout: 1000 }}>
            <Typography variant="h1">{name}</Typography>
          </Slide>
          <Slide direction="left" in {...{ timeout: 1000 }}>
            <Typography variant="h5">{description}</Typography>
          </Slide>
        </Box>
      </Container>
    </div>
  ) : null;
};

export default CourseHeader;
