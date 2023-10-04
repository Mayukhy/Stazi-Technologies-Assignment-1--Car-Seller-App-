import { configureStore} from '@reduxjs/toolkit'
import carReducer from './carSlice.js'


export const store = configureStore({
  reducer:
  { car: carReducer},
   
    
});
