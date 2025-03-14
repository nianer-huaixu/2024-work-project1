// 1. 导入redux toolkit中的createSlice方法
import { createSlice } from '@reduxjs/toolkit'
// 2. 创建一个名为router的slice
export const routerSlice = createSlice({
    name:'router',
    initialState:{path:'/',},
    reducers:{
        // 定义一个改变path的方法，同步方法，支持修改state
        changeByPath:(state,action)=>{
            state.path = action.payload
        }
    }
})

// 3. 解构出来的actionCreater函数
export const {changeByPath } = routerSlice.actions

// 4. 按需导出actionCreater
// export { changeByPath }

// 5. 默认导出的方式导出reducer
export default routerSlice.reducer