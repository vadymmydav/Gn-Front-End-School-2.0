import { ENDPOINTS } from "../../constants/endpoints";

const getCoursesEndpoints = (builder) => ({
  getCourses: builder.query({
    query: () => ENDPOINTS.COURSES,
  }),

  getCourse: builder.query({
    query: (courseId) => ({
      url: `/core/preview-courses/${courseId}`,
    }),
  }),
});

export default getCoursesEndpoints;
