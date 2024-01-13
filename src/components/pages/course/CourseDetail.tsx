import { Container, Typography } from "@mui/material";
import CourseAccordions from "./CourseAccordions";

const CourseDetail = () => {
  return (
    <Container>
      <Typography variant="h4" align="left" mb={2}>
        เนื้อหาหลักสูตร
      </Typography>
      <CourseAccordions />
    </Container>
  );
};

export default CourseDetail;
