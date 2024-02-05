// ** MUI Imports
import { Container, Grid, Typography } from "@mui/material";

// ** Type Imports
import { CourseType } from "../../../types/courses";

// ** Third Party Imports
import { useSearch } from "../../../store/search";

// ** Custom Component Imports
import SearchBar from "./SearchBar/SearchBar";
import CourseCard from "./CourseCard";
import CustomBackdrop from "../../@core/CustomBackdrop";

const HomeLayout = () => {
  const { courses, load } = useSearch();
  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 5 }}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>

        {/* Coureses */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {load ? (
              <CustomBackdrop load={load} />
            ) : courses && courses.length ? (
              courses.map((item: CourseType) => {
                return (
                  <Grid item key={item.id} xs={12} sm={6} md={3}>
                    <CourseCard data={item} />
                  </Grid>
                );
              })
            ) : (
              <Grid item xs={12} sx={{ color: "#000", mt: "auto" }}>
                <Typography variant="h5">Course Not found !</Typography>
                <Typography variant="h6">
                  This page could not be found.
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default HomeLayout;
