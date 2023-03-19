import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    getCourses(state, action) {
      const videos = action.payload?.courses?.map(
        (course) => course.meta.courseVideoPreview?.link
      );
      return { ...state, courses: action.payload, videos };
    },
  },
});

export const { getCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
