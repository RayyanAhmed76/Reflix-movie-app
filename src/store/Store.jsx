import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/reducers/MovieSlice";
import tvReducer from "../store/reducers/TvSlice";
import peopleReducer from "../store/reducers/PeopleSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});
