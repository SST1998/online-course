import { create } from "zustand";
import { CourseType } from "../../types/courses";

export type SearchStore = {
  courses: CourseType[];
  id: number;
  load: boolean;
  openFilter: boolean;
  categorie: string;
  setCourses: (data: CourseType[]) => void;
  setID: (id: number) => void;
  setCategorie: (categorie: string) => void;
  setLoad: (isLoad: boolean) => void;
  setOpenFilter: (isLoad: boolean) => void;
};

export const useSearch = create<SearchStore>()((set) => ({
  courses: [],
  id: 0,
  load: false,
  openFilter: false,
  categorie: "",
  setCourses: (data) => set({ courses: data }),
  setID: (id) => set({ id: id }),
  setCategorie: (categories) => set({ categorie: categories }),
  setLoad: (isLoad) => set({ load: isLoad }),
  setOpenFilter: (isLoad) => set({ openFilter: isLoad }),
}));
