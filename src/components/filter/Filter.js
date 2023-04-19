import { Price } from "./Price"
import { Date } from "./Date";
import { Tax } from "./Tax";

import './Filter.css';

export const Filter = () => {
  
  return(
    <div id="filter">
      <Price/>
      <Date/>
      <Tax />
      
    </div>
  )
}