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
      },
      uppWorksQuantity(state, action) {
         state.worksQuantity = action.payload;
      },
      removeWork(state, action) {
         const delWorkId = action.payload;
         state.worksArray = state.worksArray.filter(work => work.idkey !== delWorkId);
         state.worksQuantity--;
         console.log(`delWorkId = ${delWorkId}`);

      }
   }
});

// const sendWorkData = (workData) => {
//    return (dispatchAction) => {
//       dispatchAction();
//    }
// }

export const worksAction = worksSlice.actions;
export default worksSlice;