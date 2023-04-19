import { useEffect, useState } from "react"

export const Term = ({term}) =>{
  
  const [termin, setTermin] = useState()

  useEffect(()=>{
    getData()
    async function getData(){
      let response = await fetch(`http://inolta.ashaev.by/wp-json/inolta/v1/taxes/${term}`)
      setTermin(await response.json())
    }
  },[term])




if(termin && termin.length){
  return(
      <ul>
      {termin.map((el,i) =>(
        <li key={i}>
        <label>
          <input type="checkbox"/>
          <span>{el.name}</span>
        </label>
        </li>
      ))}
    </ul>
  )
} else {
  return 'Загрузка'
}


}