import { useEffect, useState } from "react";
import SearchAutocomplete from "./SearchAutocomplete";
import SearchChip from "./SearchChip";
import { CourseType } from "../../../../types/courses";

// ** API
import { ONLINE_COURSE_API } from "../../../../assets/api/online-course-api";
import { Grid } from "@mui/material";

const SearchBar = () => {
  const [categories, setCategories] = useState<CourseType["categories"][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ONLINE_COURSE_API}/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchAutocomplete />
      </Grid>
      <Grid item xs={12}>
        <SearchChip categories={categories} />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
