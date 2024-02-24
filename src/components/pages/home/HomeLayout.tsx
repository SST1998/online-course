// ** MUI Imports
import { Container, Grid } from "@mui/material";
// ** Type Imports
import { CourseType } from "../../../types/courses";

// ** Third Party Imports
import { useSearch } from "../../../store/search";

// ** Custom Component Imports
import SearchBar from "./SearchBar/SearchBar";
import CourseCard from "./CourseCard";
import CustomBackdrop from "../../@core/CustomBackdrop";
import Error500 from "../../@core/Error500";

const HomeLayout = () => {
  const { courses, load } = useSearch();
  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 5 }}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>

        {/* Courses */}
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
              <Error500 />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default HomeLayout;
