import { useEffect, useState } from "react"
import { Term } from "./Term"

export const Tax = () => {

  const [taxes, setTax] = useState([])
  
  useEffect(()=>{
    getData()
    async function getData(){
      let response = await fetch('http://inolta.ashaev.by/wp-json/inolta/v1/taxes/')
      setTax(await response.json())
    }
  },[])


  return (
    
    <div className="taxes">
      {!taxes.length && "Загрузка"}

      {taxes.map((el,i) => (
        <section key={i}>
          <h3>{el}</h3>
          <Term term={el}/>
        </section>
      ))}

    </div>
  )
}