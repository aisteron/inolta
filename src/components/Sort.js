import { useSelector, useDispatch } from 'react-redux'
import { sorted } from '../store/inoltaSlice'

export const Sort = () =>{

  const sort = useSelector( state => state.mv.sort)
  const dispatch = useDispatch()

  return(
    <div className="sort">
      
      <ul>
        <li className={get_cls("price",sort)} onClick={() => dispatch(sorted("price"))}>price</li>
        <li className={get_cls("date",sort)} onClick={() => dispatch(sorted("date"))}>date</li>
      </ul>
      
    </div>
  )
}

function get_cls(src_cls, sort){
  if(!sort.length) return src_cls
  if(src_cls !== sort[0]) return src_cls
  return src_cls +" "+ sort[1]
}