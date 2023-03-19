import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import getCoursesEndpoints from './courses'

const REACT_APP_API = "https://api.wisey.app/api/v1/";
export const REACT_APP_SECRET_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4OWQ1ZDVjNi00NjJkLTRkNTgtYjdiYy1mZjFhOThhYTliZDEiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg5OTk2NTksImV4cCI6MTY3OTg5OTY1OX0.AbWwneDmcycVCWIuhGAjiplyEZdGNFsRlc7Ak1HhLL4";

  const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: REACT_APP_API,
      prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${REACT_APP_SECRET_KEY}`);
        return headers;
      }
    }),
    endpoints(builder) {
      return {
        ...getCoursesEndpoints(builder)
      }
    }
  })

  export const {
    useGetCoursesQuery, 
    useGetCourseQuery,
  } = api

  export default api
