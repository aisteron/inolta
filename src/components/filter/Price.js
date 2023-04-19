import { useEffect } from "react"
import { useState } from "react"

export const Price = () => {

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
        <input type="number" placeholder={range[0]}/>
      </label>
      <label>
        <span>До</span>
        <input type="number" placeholder={range[1]}/>
      </label>
    </div>
  )
}