// ** MUI Imports
import { Box, Chip, Collapse } from "@mui/material";
import { useSearch } from "../../../../store/search";
import { CourseType } from "../../../../types/courses";

// ** API
import { ONLINE_COURSE_API } from "../../../../assets/api/online-course-api";

interface CategorieProp {
  categories: CourseType["categories"][];
}

export default function SearchChip({ categories }: CategorieProp) {
  const { openFilter, setCategorie, setLoad, setCourses } = useSearch();

  const handleClick = async (categorie: string) => {
    await setLoad(true);
    setCategorie(categorie);

    try {
      const response = await fetch(
        `${ONLINE_COURSE_API}/categories/${categorie}/courses`
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
          <Chip
            variant="outlined"
            label="All"
            onClick={() => handleClick("All")}
            sx={{
              ml: 1,
              p: 1,
              border: "1px solid #000",
              bgcolor: "#000",
              color: "#fff",
              "&:hover": {
                color: "#000",
                bgcolor: "#fff",
              },
            }}
          />
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
