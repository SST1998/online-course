import { useEffect, useState } from "react";
import SearchAutocomplete from "./SearchAutocomplete";
import SearchChip from "./SearchChip";
import { CourseType } from "../../../../types/courses";

// ** API
import { Grid } from "@mui/material";
import {
  fetchByCategories,
  fetchCategories,
} from "../../../../assets/api/course";
import axios from "axios";

const SearchBar = () => {
  const [categories, setCategories] = useState<CourseType["categories"][]>([]);
  useEffect(() => {
    fetchCategories();
    fetchByCategories();
    const fetchData = async () => {
      try {
        const response = await axios(`/categories`);
        const data = await response.data;
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
