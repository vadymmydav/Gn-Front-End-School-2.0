import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
      getCourses(state, action) {
        console.log(action.payload);
        const videos = action.payload?.courses?.map(
          (course) => course.meta.courseVideoPreview?.link
        );
       return {...state, courses: action.payload, videos }
    }},
});

export const {
  getCourses,
  } = coursesSlice.actions

  console.log({coursesSlice}, coursesSlice.reducer, getCourses);


export default coursesSlice.reducer;