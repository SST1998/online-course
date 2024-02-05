import { useEffect, useState } from "react";
import SearchAutocomplete from "./SearchAutocomplete";
import SearchChip from "./SearchChip";
import { CourseType } from "../../../../types/courses";

// ** API
import { ONLINE_COURSE_API } from "../../../../assets/api/online-course-api";

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
    <>
      <SearchAutocomplete />
      <SearchChip categories={categories} />
    </>
  );
};

export default SearchBar;
