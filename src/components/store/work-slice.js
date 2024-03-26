import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   worksArray: [
      {
         id: '1',
         title: 'Work_1 title',
         description: 'Work_1 description',
         time: '1:15'
      },
      {
         id: '2',
         title: 'Work_2 title',
         description: 'Work_2 description',
         time: '0:15'
      },
      // {
      //    id: '3',
      //    title: 'Work_3 title',
      //    description: 'Work_3 description',
      //    time: '2:15'
      // }
   ],
   worksQuantity: 2

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
})

export const worksAction = worksSlice.actions;
export default worksSlice;