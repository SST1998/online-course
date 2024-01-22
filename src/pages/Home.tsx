// ** React Imports
import { useEffect } from "react";

// ** Third Party Imports
import { useSearch } from "../store/search";

// ** Custom Component Imports
import HomeLayout from "../components/pages/home/HomeLayout";

const key: string = "AIzaSyBZFJw-oJ2UcAVTgPLHFBy1uiLBblDoEZM";

const Home = () => {
  const { id, setCourses, setLoad } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      try {
        const response = await fetch(
          `https://18acf89d-9962-4e88-807a-5629021e967b-00-3w1ylynbxarta.worf.replit.dev/courses/${id}`
        );
        const data = await response.json();
        setCourses(data);
        setLoad(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const fetchYouTube = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLUaB-1hjhk8GHKfndKjyDMHPg_HlQ4vpK&key=${key}`
      );
      console.log(response);
    };
    fetchYouTube();
  }, [id]);

  return <HomeLayout />;
};
export default Home;
