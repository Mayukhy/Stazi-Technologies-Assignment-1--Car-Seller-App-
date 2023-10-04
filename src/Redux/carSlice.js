import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerm:'',
  categoryName:'',
  page:1,
  searchPage:1,
  catePage:1
}

export const userSlice = createSlice({
    //from react component by this name the states are called
  name: 'car',
  initialState,
  reducers: {
    setCategoryName: (state,action) => {
        state.categoryName=action.payload
        },
    setSearchTerm: (state,action) => {
        state.searchTerm=action.payload
        },
        setPage: (state,action) => {
            state.page=action.payload
            },
            setsearchPage: (state,action) => {
                state.searchPage=action.payload
                },
                setCategoryPage: (state,action) => {
                  state.catePage=action.payload
                  },

  },
})

// Action creators are generated for each case reducer function
export const {startLoading,endLoading,setSearchTerm,setCategoryName,setPage,setsearchPage,setCategoryPage} = userSlice.actions

export default userSlice.reducer