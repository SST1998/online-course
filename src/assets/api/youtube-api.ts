export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_API_PLAYLIST = `${
  import.meta.env.VITE_YOUTUBE_API
}/playlistItems?key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_API_VIDEOS = `${
  import.meta.env.VITE_YOUTUBE_API
}/videos?key=${YOUTUBE_API_KEY}`;
