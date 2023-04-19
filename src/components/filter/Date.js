import { useEffect, useState } from "react"

export const Date = () => {

  const[date, setDate] = useState([])

  useEffect(()=>{
    getData()

    async function getData(){
      let response = await fetch('http://inolta.ashaev.by/wp-json/inolta/v1/date')
      setDate(await response.json())
    }
  },[])

  let range = get_range(date)
  


  return(
    <div className="date">
      <label>
        <span>От</span>
        <input type="date" value={range && range[0]} min={range && range[0]} max={range && range[1]}/>
      </label>
      <label>
        <span>До</span>
        <input type="date" value={range && range[1]} min={range && range[0]} max={range && range[1]}/>
      </label>
    </div>
  )
}

function get_range(array){

 if(!array.length) return

  let d = array.map(el => {
    let p = el.split("/")
    return `${p[2]}/${p[1]}/${p[0]}`

  })

  let min = d.reduce(function (a, b) { return a < b ? a : b; })
  let max = d.reduce(function (a, b) { return a > b ? a : b; });

  min = min.replaceAll("/","-")
  max = max.replaceAll("/","-")

  return [min, max]
  
}