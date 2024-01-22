import { create } from "zustand";
import { CourseType } from "../../types/courses";

export type CoursePageType = {
  courses: CourseType;
  id: number;
  load: boolean;
  setCourses: (data: CourseType) => void;
  setID: (id: number) => void;
  setLoad: (isLoad: boolean) => void;
};

export const useCourse = create<CoursePageType>()((set) => ({
  courses: {
    categories: "",
    description: "",
    id: 0,
    name: "",
    playlistId: "",
    img: "",
  },
  id: 0,
  load: false,
  setCourses: (data) => set({ courses: data }),
  setID: (id) => set({ id: id }),
  setLoad: (isLoad) => set({ load: isLoad }),
}));
