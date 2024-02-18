/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { CourseType } from "../../types/courses";

export type CoursePageType = {
  courses: CourseType | null;
  id: number;
  load: boolean;
  playlist?: any;
  setCourses: (data: CourseType) => void;
  setID: (id: number) => void;
  setLoad: (isLoad: boolean) => void;
  setPlayList: (playlists: any) => void;
};

export const useCourse = create<CoursePageType>()((set) => ({
  courses: null,
  id: 0,
  load: false,
  playlist: {},
  setCourses: (data) => set({ courses: data }),
  setID: (id) => set({ id: id }),
  setLoad: (isLoad) => set({ load: isLoad }),
  setPlayList: (playlists) => set({ playlist: playlists }),
}));
