import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setSidebarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
  // reducers: {
  //   toggleSidebar: (state) => {
  //     state.isSidebarOpen = !state.isSidebarOpen;
  //   },
  //   setSidebarState: (state, action: PayloadAction<boolean>) => {
  //     state.isSidebarOpen = action.payload;
  //   },
  // },
});

export const { setSidebarClose, setSidebarOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;

