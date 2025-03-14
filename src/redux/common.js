import { createSlice } from '@reduxjs/toolkit'
export const commonSlice = createSlice({
    name:'common',
    initialState:{
        newCategory:0,
        URL:'https://www.yangdong.co:443/yangdong_web/',
        comURL:'https://www.yangdong.co:443/'
    },
    reducers:{
        changeNewCategory:(state,action)=>{
            state.newCategory = action.payload
        }
    }
})
export const {changeNewCategory} = commonSlice.actions

export default commonSlice.reducer