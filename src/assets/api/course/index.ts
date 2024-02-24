import courses from "../../../@fake-db/courses";
import mock from "../../../@fake-db/mock";
import { CourseType } from "../../../types/courses";

// export const fetchCourses = () => {
//   mock.onGet("/courses").reply(() => {
//     return [200, courses];
//   });
// };

export const fetchCoursesOption = () => {
  mock.onGet("/courses/option").reply(() => {
    const option = [
      ...new Set(
        courses.map((course: CourseType) => {
          return {
            id: course.id,
            name: course.name,
          };
        })
      ),
    ];
    return [200, option];
  });
};

export const fetchCategories = () => {
  mock.onGet("/categories").reply(() => {
    const categories = [
      ...new Set(courses.map((course: CourseType) => course.categories)),
    ];
    return [200, categories];
  });
};

export const fetchCoursesById = () => {
  mock.onGet("/courses").reply((requset) => {
    const course_id = parseInt(requset.params.course_id);
    const course = courses.filter((course) => course.id === course_id);
    const allCourse = courses;

    if (course.length !== 0) {
      return [200, course];
    } else {
      return [200, allCourse];
    }
  });
};

export const fetchPageById = () => {
  mock.onGet("/page/courses").reply((requset) => {
    const course_id = parseInt(requset.params.course_id);
    const course = courses.find((course) => course.id === course_id);
    if (course) {
      return [200, course];
    } else {
      return [404];
    }
  });
};

export const fetchByCategories = () => {
  mock.onGet("/courses/categories").reply((requset) => {
    const category_name = requset.params.category_name;
    const category_courses = courses.filter(
      (course: CourseType) => course.categories === category_name
    );

    if (category_courses.length > 0) {
      return [200, category_courses];
    } else {
      return [200, courses];
    }
  });
};
