import { useEffect, useState } from "react"

import { useDispatch } from 'react-redux'
import { taxed } from '../../store/inoltaSlice'

export const Term = ({term}) =>{
  
  const [termin, setTermin] = useState()

  useEffect(()=>{
    getData()
    async function getData(){
      let response = await fetch(`http://inolta.ashaev.by/wp-json/inolta/v1/taxes/${term}`)
      setTermin(await response.json())
    }
  },[term])


  const dispatch = useDispatch()

 



  if(termin && termin.length){
    return(
        <ul>
        {termin.map((el,i) =>(
          <li key={i}>
          <label>
            <input type="checkbox" onChange={()=>dispatch(taxed({taxonomy: term, field: 'name',terms:el.name}))}/>
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