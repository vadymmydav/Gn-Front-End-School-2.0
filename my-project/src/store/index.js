import {  configureStore } from "@reduxjs/toolkit";

import rootReducer from './reducer/index'
import api from "./api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware().concat(api.middleware),
  ],
});

export const RootState = store.getState();