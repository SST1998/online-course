// ** React Imports
import { useEffect } from "react";

// ** Third Party Imports
import { useSearch } from "../store/search";

// ** Custom Component Imports
import HomeLayout from "../components/pages/home/HomeLayout";

// ** API
import { ONLINE_COURSE_API } from "../assets/api/online-course-api";
import { fetchData } from "../assets/utils/fetchData";

const Home = () => {
  const { id, setCourses, setLoad } = useSearch();

  useEffect(() => {
    setLoad(true);
    fetchData(`${ONLINE_COURSE_API}/courses/${id}`)
      .then(async (response) => {
        const data = await response;
        setCourses(data);
        setLoad(false);
      })
      .catch(() => {
        setLoad(false);
      });
  }, [id]);

  return <HomeLayout />;
};
export default Home;
