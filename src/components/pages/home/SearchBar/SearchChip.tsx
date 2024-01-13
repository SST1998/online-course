// ** MUI Imports
import { Box, Chip, Collapse } from "@mui/material";
import { useSearch } from "../../../../store/search";
import { CourseType } from "../../../../types/courses";

interface CategorieProp {
  categories: CourseType["categories"][];
}

export default function SearchChip({ categories }: CategorieProp) {
  const { openFilter, setCategorie, setLoad, setCourses } = useSearch();

  const handleClick = async (categorie: string) => {
    setCategorie(categorie);
    await setLoad(true);

    try {
      const response = await fetch(
        `https://18acf89d-9962-4e88-807a-5629021e967b-00-3w1ylynbxarta.worf.replit.dev/categories/${categorie}/courses`
      );
      const data = await response.json();
      setCourses(data);
      setLoad(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Collapse in={openFilter}>
        <Box
          sx={{
            mt: 1,
            py: 1,
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            borderRadius: "10rem",
          }}
        >
          {categories.length != 0 &&
            categories.map((categorie, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={categorie}
                onClick={() => handleClick(categorie)}
                sx={{
                  ml: 1,
                  p: 1,
                  border: "1px solid #000",
                }}
              />
            ))}
        </Box>
      </Collapse>
    </>
  );
}
