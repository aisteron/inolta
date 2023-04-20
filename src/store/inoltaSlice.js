import { createSlice,current } from '@reduxjs/toolkit'

export const initialState = {
  sort: [],
  price:[],
  date: [],
  tax:[]
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

    },
    priced: (state, action) => {
      state.price = action.payload
    },

    dated:(state, action) =>{
      state.date = action.payload
    },
    taxed:(state,action) => {
      //console.log(current.state)

      

      if(!state.tax.length){
        let obj = action.payload
        obj.terms = [obj.terms]
        state.tax = [obj]
      } else {

        let st = JSON.parse(JSON.stringify(state.tax))
        let found = false
        
        st.forEach(obj => {

          if(obj.taxonomy === action.payload.taxonomy){

            !obj.terms.includes(action.payload.terms)
            ? obj.terms.push(action.payload.terms)
            : obj.terms = obj.terms.filter(el => el !== action.payload.terms)
            
            found = true
          }

        })

        if(!found){
          let obj = action.payload
          obj.terms = [obj.terms]
          st.push(obj)
        }

        st = st.filter(el => el.terms.length)
        
        state.tax = st
      
      }


      console.log(current(state).tax)

      
      
      
      
    }
  },
})

export const { sorted, priced, dated, taxed } = inoltaSlice.actions

export default inoltaSlice.reducer