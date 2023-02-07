import {createSlice} from '@reduxjs/toolkit';

const GetProfileSlice = createSlice({
  name: 'getUserData',
  initialState: {},
  reducers: {
    getUserProfile(state, action) {
      console.log('state', state);
      console.log('action', action.payload);
      state = action.payload;
    },
  },
});

export const {getUserProfile} = GetProfileSlice.actions;
export default GetProfileSlice.reducer;
