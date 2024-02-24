// ** MUI Imports
import { Box, Chip, Collapse } from "@mui/material";
import { useSearch } from "../../../../store/search";
import { CourseType } from "../../../../types/courses";

// ** API
import axios from "axios";

interface CategorieProp {
  categories: CourseType["categories"][];
}

export default function SearchChip({ categories }: CategorieProp) {
  const { openFilter, setCategorie, setLoad, setCourses } = useSearch();

  const handleClick = async (categorie: string) => {
    await setLoad(true);
    setCategorie(categorie);

    try {
      const response = await axios.get(`/courses/categories`, {
        params: { category_name: categorie },
      });
      const data = await response.data;
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
            p: 1,
            display: "flex",
            justifyContent: "flex-start",
            borderRadius: "10rem",
            border: "1px solid #000",
          }}
        >
          <Chip
            variant="outlined"
            label="All"
            onClick={() => handleClick("All")}
            sx={{
              position: "sticky",
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
          <Box
            sx={{
              overflowX: "scroll",
              display: "flex",
              justifyContent: "flex-start",
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
        </Box>
      </Collapse>
    </>
  );
}
