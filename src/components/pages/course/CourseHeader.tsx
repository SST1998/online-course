import { Box, Container, Slide, Typography } from "@mui/material";
import "../../../styles/bg-course.css";

const img: string =
  "https://images.unsplash.com/photo-1538439907460-1596cafd4eff?q=80&w=3256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const CourseHeader = () => {
  return (
    <div className="wrap-bg" style={{ backgroundImage: `url(${img})` }}>
      <Container maxWidth="lg" className="text-relative">
        <Box>
          <Slide direction="right" in {...{ timeout: 1000 }}>
            <Typography variant="h1">Intro to Python</Typography>
          </Slide>
          <Slide direction="left" in {...{ timeout: 1000 }}>
            <Typography variant="h5">
              Learn the basics of Python, a popular programming language for
              both beginners and experts.
            </Typography>
          </Slide>
        </Box>
      </Container>
    </div>
  );
};

export default CourseHeader;
