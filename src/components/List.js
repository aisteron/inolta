import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { initialState } from "../store/inoltaSlice"

export const List = () => {

  const [movies, setMovies] = useState([])
  const state = useSelector((state) => state.mv)

  
  useEffect(()=>{

    const getData = async () => {

      let response = await fetch(`http://inolta.ashaev.by/wp-json/inolta/v1/movies/`,{
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(state)
      })
      setMovies(await response.json())

    }

    getData()
  },[state])
  
  return(
    <div className="movies">
     {!movies.length && 'Загрузка'}
    
     {movies.map(el => (
      <div className="card" key={el.id}>
        <h3>{el.name}</h3>
        <p className="price">Price: ${el.price}</p>
        <p className="date">{el.date}</p>
        <p>Страна производства:</p>
        <ul>
          {el.tax[0].map((c,i) => (
            <li key={i}>{c.name}</li>
          ))}
        </ul>
        <p>Актеры:</p>
        <ul>
          {el.tax[1].map((a,i)=>(
            <li key={i}>{a.name}</li>
          ))}
        </ul>
      </div>
     ))}
    </div>
  )
}

