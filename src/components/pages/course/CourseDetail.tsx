/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Typography } from "@mui/material";
import CourseAccordions from "./CourseAccordions";
import { useCourse } from "../../../store/course";
import { Fragment } from "react";

const CourseDetail = () => {
  const { playlist } = useCourse();
  const { items } = playlist;

  return (
    <Container>
      <Typography variant="h4" align="left" mb={2}>
        เนื้อหาหลักสูตร
      </Typography>
      {items && items.length
        ? items.map((item: any, index: number) => {
            const number = index + 1;
            return (
              <Fragment key={index}>
                <CourseAccordions index={number} data={item} />
              </Fragment>
            );
          })
        : null}
    </Container>
  );
};

export default CourseDetail;
