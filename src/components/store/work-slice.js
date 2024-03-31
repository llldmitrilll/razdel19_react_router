import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   worksArray: [],
   worksQuantity: 0
}

const worksSlice = createSlice({
   name: 'works',
   initialState: initialState,
   reducers: {
      addWork(state, action) {
         const newWork = action.payload;
         state.worksArray.push(newWork);
         state.worksQuantity++
      }
   }
});

export const worksAction = worksSlice.actions;
export default worksSlice;