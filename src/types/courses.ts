export type CourseType = {
  categories: string;
  description: string;
  id: number;
  name: string;
  playlistId: string;
  img: string;
};

export type SearchCourseType = {
  id: number;
  name: string;
};

export type LinkType = {
  pathName: string;
  url: string;
};
