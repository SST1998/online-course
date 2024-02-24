// ** React Imports
import { useEffect, useState } from "react";

// ** MUI Imports
import Autocomplete from "@mui/material/Autocomplete";
import { Button, InputBase, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

// ** Type Import
import { SearchCourseType } from "../../../../types/courses";
import { useSearch } from "../../../../store/search";

// ** API
import axios from "axios";
import { fetchCoursesOption } from "../../../../assets/api/course";

// ** Search Bar Style
const Search = styled("div")(({ theme }) => ({
  borderRadius: "10rem",
  border: "1px solid #000",
  marginLeft: 0,
  width: "100%",
  minWidth: "30vw",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "&.MuiAutocomplete-inputRoot": {
    padding: theme.spacing(1),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "12ch",
    "&:focus": {
      width: "20ch",
    },
  },
}));

export default function SearchAutocomplete() {
  const { setID, setOpenFilter, openFilter } = useSearch();
  const [autocompleteValue, setAutocompleteValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [option, setOption] = useState<SearchCourseType[]>([]);

  const handlechange = (data: SearchCourseType) => {
    if (data) {
      setID(data.id);
    } else {
      [setID(0)];
    }
  };

  const handleClickFilter = () => {
    setOpenFilter(openFilter === true ? false : true);
  };

  // Fetch data
  useEffect(() => {
    fetchCoursesOption();
    const fetchData = async () => {
      try {
        const response = await axios.get("/courses/option");
        const data = await response.data;
        setOption(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Search sx={{ flexGrow: { xs: 1, md: 0 } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        {/* Autocomplete */}
        <Autocomplete
          fullWidth
          freeSolo={false}
          popupIcon={""}
          options={option}
          getOptionLabel={(option: SearchCourseType) => option.name}
          renderOption={(props, option: SearchCourseType) => {
            return (
              <li {...props} key={option.id}>
                <Typography variant="subtitle1" sx={{ ml: 2, color: "#000" }}>
                  {option.name}
                </Typography>
              </li>
            );
          }}
          open={open}
          onKeyDown={() => {
            setOpen(true);
          }}
          onClose={() => setOpen(false)}
          inputValue={autocompleteValue}
          onInputChange={(_event, newInputValue) => {
            setAutocompleteValue(newInputValue);
          }}
          onChange={(_event, data) => {
            handlechange(data!);
          }}
          renderInput={(params) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { InputLabelProps, InputProps, ...rest } = params;
            return (
              <StyledInputBase
                {...params.InputProps}
                {...rest}
                placeholder="ค้นหาคอร์สที่ต้องการ"
                value={autocompleteValue}
                onChange={(event) => {
                  setAutocompleteValue(event.target.value);
                }}
              />
            );
          }}
        />

        {/* Filter */}
        <Button
          onClick={handleClickFilter}
          variant="text"
          startIcon={<TuneIcon />}
          color="inherit"
          sx={{
            px: 2,
            "&:hover": {
              bgcolor: "inherit",
            },
            "&:focus": {
              borderRadius: "10rem",
            },
          }}
        >
          <Typography variant="caption" align="left">
            ค้นหาตามประเภท
          </Typography>
        </Button>
      </Search>
    </>
  );
}
