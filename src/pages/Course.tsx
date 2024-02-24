/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useCourse } from "../store/course";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import CourseLayout from "../components/pages/course/CourseLayout";
import CustomBackdrop from "../components/@core/CustomBackdrop";
// ** API
import { fetchYouTube } from "../assets/utils/fetchYoutube";
import {
  YOUTUBE_API_PLAYLIST,
  YOUTUBE_API_VIDEOS,
} from "../assets/api/youtube-api";
import axios from "axios";
import { fetchPageById } from "../assets/api/course";

const Course = () => {
  const { id } = useParams();
  const { load, setLoad, setCourses, setPlayList } = useCourse();

  useEffect(() => {
    fetchPageById();
    setLoad(true);
    const fetchData = async () => {
      await axios
        .get(`/page/courses`, { params: { course_id: id } })
        .then(async (response) => {
          const data = await response.data;
          const { playlistId } = data;

          const fetchPlaylistItems = async (playlistId: string) =>
            await fetchYouTube(
              `${YOUTUBE_API_PLAYLIST}&part=snippet&playlistId=${playlistId}&maxResults=50`
            );

          const fetchAllVideoDetails = async (videoIds: any) =>
            await fetchYouTube(
              `${YOUTUBE_API_VIDEOS}&part=snippet,contentDetails&id=${videoIds.join(
                ","
              )}`
            );

          const filterDeletedVideos = async (playlistId: string) => {
            const playlistItems = await fetchPlaylistItems(playlistId);
            const videoIds = playlistItems.items.map(
              (item: any) => item.snippet.resourceId.videoId
            );
            const allVideoDetails = await fetchAllVideoDetails(videoIds);

            return allVideoDetails;
          };

          const youtubeData = await filterDeletedVideos(playlistId);

          setCourses(data);
          setPlayList(youtubeData);
          setLoad(false);
        })
        .catch(() => {
          setLoad(false);
        });
    };
    fetchData();
  }, [id, setCourses, setLoad, setPlayList]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        {load ? <CustomBackdrop load={load} /> : <CourseLayout />}
      </Grid>
    </Grid>
  );
};

export default Course;
