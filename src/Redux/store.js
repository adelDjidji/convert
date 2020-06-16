import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Reducer';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
});
