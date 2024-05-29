import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RepositoriesState } from "@/types/redux/repositories";
import {
  RepositoryGraphqlType,
  RepositoryDetailGraphqlType,
} from "@/types/graphql/repository";

const initialState: RepositoriesState = {
  repositories: [],
  repository: null,
};

const repositoriesSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setRepositories: (
      state,
      action: PayloadAction<RepositoryGraphqlType[]>
    ) => {
      state.repositories = action.payload;
    },
    setRepositoryDetail: (
      state,
      action: PayloadAction<RepositoryDetailGraphqlType>
    ) => {
      state.repository = action.payload;
    },
  },
});

export const { setRepositories, setRepositoryDetail } =
  repositoriesSlice.actions;
export default repositoriesSlice.reducer;
