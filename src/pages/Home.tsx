// ** React Imports
import { useEffect } from "react";

// ** Third Party Imports
import { useSearch } from "../store/search";

// ** Custom Component Imports
import HomeLayout from "../components/pages/home/HomeLayout";

// ** API
import {
  // fetchCourses,
  fetchCoursesById,
} from "../assets/api/course";
import axios from "axios";

const Home = () => {
  const { id, setCourses, setLoad } = useSearch();
  fetchCoursesById();

  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      await axios
        .get("/courses", { params: { course_id: id } })
        .then(async (response) => {
          const data = await response.data;

          setCourses(data);
          setLoad(false);
        })
        .catch(() => {
          setLoad(false);
        });
    };
    fetchData();
  }, [id, setCourses, setLoad]);

  return <HomeLayout />;
};
export default Home;
