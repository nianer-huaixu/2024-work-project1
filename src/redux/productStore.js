// 1. 导入redux toolkit中的createSlice方法
import { createSlice } from '@reduxjs/toolkit'
// 2. 创建名为productIndex的slice
export const productSlice = createSlice({
    name:'product',
    initialState:{
        categoryIndex:0,
        typeIndex:0,
        seriseIndex:3,
        title:{
            c_t:'',
            e_t:''
        },
        prompt:['6061铝板', '6061铝棒', '7075铝板','7075铝棒','2A12铝棒','2A12铝管']
    },
    reducers:{
        // 修改category的索引
        changeCategory:(state,action)=>{
            state.categoryIndex = action.payload
            state.typeIndex = 0
            state.seriseIndex = 0
        },
        // 修改二级类目索引
        changeType:(state,action)=>{
            state.typeIndex = action.payload
        },
        // 修改三级类目子项
        changeSerise:(state,action)=>{
            state.seriseIndex = action.payload
        },
        // 设置产品二级标题
        setTitle:(state,action)=>{
            state.title = action.payload
        },
        // 设置快速访问数组
        setPrompt:(state,action)=>{
            state.prompt = action.payload
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { changeCategory, changeType,changeSerise,setTitle,setPrompt } = productSlice.actions

export default productSlice.reducer