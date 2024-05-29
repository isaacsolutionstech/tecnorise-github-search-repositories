import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchState } from "@/types/redux/search";

const initialState: SearchState = {
  value: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
