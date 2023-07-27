const { createSlice } = require("@reduxjs/toolkit")

export const productSlice = createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {addProduct}=productSlice.actions;

export default productSlice.reducer;