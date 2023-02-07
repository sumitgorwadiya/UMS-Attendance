import {configureStore} from '@reduxjs/toolkit';
import GetProfileSlice from './GetProfileSlice';

export const MyStore = configureStore({
  reducer: {myProduct: GetProfileSlice},
});
