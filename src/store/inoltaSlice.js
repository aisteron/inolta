import { createSlice, current } from '@reduxjs/toolkit'

export const initialState = {
  sort: [],
  price:[],
  date: [],
  tax:{}
}

export const inoltaSlice = createSlice({
  name: 'mv',
  initialState,
  reducers: {
    sorted: (state, action) => {

      if(!state.sort.length){
        state.sort = [action.payload, "asc"]
      } else {
        
        state.sort[0] = action.payload
        
        state.sort[1] === "asc"
        ? (state.sort[1] = "desc")
        : state.sort = []

        
      }
      
      //console.log(current(state))
    
      

    },
    priced: (state, action) => {
      state.price = action.payload
    },
  },
})

export const { sorted, priced } = inoltaSlice.actions

export default inoltaSlice.reducer