import { createSlice } from '@reduxjs/toolkit';

export interface userAuthData {
  phone: string | null;
  password: string | null;
}

const initialState: userAuthData = {
  phone: null,
  password: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = { ...action.payload };
      console.log('state: ', state);
    },

    removeUser: (state) => {
      state.phone = null;
      state.password = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
