import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./reducers/modal.reducer";
import searchReducer from "./reducers/search.reducer";
import repositoriesReducer from "./reducers/repositories.reducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    search: searchReducer,
    github: repositoriesReducer,
  },
});

export default store;
