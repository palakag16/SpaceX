import { createSlice } from "@reduxjs/toolkit";
let states = [];
let backupdata = [];
let COUNT_PER_PAGE = 18;
const SpaceApi = createSlice({
  name: "spaceX",
  initialState: states,
  reducers: {
    Searchquery: (state, action) => {
      const filtereddata = backupdata.filter((el) => {
        const q = el?.[action.payload.title]?.toLowerCase();
        if (q) {
          const s = action.payload.query?.toLowerCase();
          return q.includes(s);
        }
      });
      state = filtereddata;
      return state;
    },
    fetchAPIData: (state, action) => {
      backupdata = action.payload;
    },
    Pagechange: (state, action) => {
      const dta = backupdata?.slice(
        (action.payload - 1) * COUNT_PER_PAGE,
        action.payload * COUNT_PER_PAGE
      );
      state = dta;
      return state;
    },
  },
});

export const { Searchquery, fetchAPIData, Pagechange } = SpaceApi.actions;
export default SpaceApi.reducer;
