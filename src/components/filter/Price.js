import { useEffect, useRef } from "react"
import { useState } from "react"

import { useDispatch } from 'react-redux'
import { priced } from '../../store/inoltaSlice'

export const Price = () => {

  const dispatch = useDispatch()
  
  const fromPrice = useRef(null)
  const toPrice = useRef(null)

  function setPrice(){
    if(!fromPrice.current.value && !toPrice.current.value ){
      dispatch(priced([]))
      return
    }
    let from = !fromPrice.current.value ? 0 : +fromPrice.current.value
    let to = !toPrice.current.value ? range[1] : +toPrice.current.value
    dispatch(priced([from,to]))
  }
  

  const [range, setRange] = useState([])
  useEffect(()=>{
    getData()
    async function getData(){
      let response = await fetch('http://inolta.ashaev.by/wp-json/inolta/v1/price')
      setRange(await response.json())
    }
  },[])



  return(
    <div className="price">
      <label>
        <span>От</span>
        <input type="number" placeholder={range[0]} ref={fromPrice} onChange={()=>setPrice()}/>
      </label>
      <label>
        <span>До</span>
        <input type="number" placeholder={range[1]} ref={toPrice} onChange={()=>setPrice()}/>
      </label>
    </div>
  )
}