export const fetchYouTube = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getVideoStartTime = (videoDetails: any) => {
  const duration = videoDetails.contentDetails.duration;
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const getHours = match[1] ? parseInt(match[1]) : 0;
  const getMinutes = match[2] ? parseInt(match[2]) : 0;
  const getSeconds = match[3] ? parseInt(match[3]) : 0;
  const pureTime = getHours * 3600 + getMinutes * 60 + getSeconds;

  const minutes = Math.floor(pureTime / 60);
  const seconds = pureTime % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds} min`;
};
