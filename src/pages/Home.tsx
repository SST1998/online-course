import { Backdrop, CircularProgress, Container, Grid } from "@mui/material";
import { CourseType } from "../types/courses";

// const key: string = 'AIzaSyBZFJw-oJ2UcAVTgPLHFBy1uiLBblDoEZM';

import CourseCard from "../components/pages/home/CourseCard";
import SearchBar from "../components/pages/home/SearchBar/SearchBar";
import * as React from "react";
import { useSearch } from "../store/search";

const Home = () => {
  const { courses, id, load, setCourses, setLoad } = useSearch();

  React.useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await fetch(
          `https://18acf89d-9962-4e88-807a-5629021e967b-00-3w1ylynbxarta.worf.replit.dev/courses/${id}`
        );
        const data = await response.json();
        setCourses(data);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 5 }}>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>

        {/* Coureses */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            {courses && courses.length ? (
              courses.map((item: CourseType) => {
                return (
                  <Grid item key={item.id} xs={12} sm={6} md={3}>
                    <CourseCard data={item} />
                  </Grid>
                );
              })
            ) : (
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={load}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
