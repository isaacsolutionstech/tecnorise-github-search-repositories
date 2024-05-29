import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalState } from "@/types/redux/modal";

const initialState: ModalState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;
