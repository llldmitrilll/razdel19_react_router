import { configureStore } from "@reduxjs/toolkit";
import worksSlice from "./work-slice";

const store = configureStore({
   reducer: {
      works: worksSlice.reducer
   }
})

export default store;