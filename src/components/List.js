import { useEffect, useState } from "react"

export const List = () => {

  const [movies, setMovies] = useState([])
  
  useEffect(()=>{

    const getData = async () => {
      let response = await fetch(`http://inolta.ashaev.by/wp-json/inolta/v1/movies/`)
      setMovies(await response.json())
    }

    getData()
  },[])
  
  return(
    <ul className="movies">
     {!movies.length && 'Загрузка'}
    
     {movies.map(el => (
      <li>{el.ID}</li>
     ))}
    </ul>
  )
}