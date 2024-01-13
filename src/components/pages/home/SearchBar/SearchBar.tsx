import { useEffect, useState } from "react";
import SearchAutocomplete from "./SearchAutocomplete";
import SearchChip from "./SearchChip";
import { CourseType } from "../../../../types/courses";

const SearchBar = () => {
  const [categories, setCategories] = useState<CourseType["categories"][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://18acf89d-9962-4e88-807a-5629021e967b-00-3w1ylynbxarta.worf.replit.dev/categories`
        );
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
