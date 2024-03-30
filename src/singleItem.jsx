import React, { useState } from 'react'
import './style.css'


const SingleItem = ({items,removeItem}) => {
    const {values , id , checkplace} = items
    const [checked, setchecked] = useState(checkplace);
    const deleteItem = ()=>{
      removeItem(id);
      

    }
    const checking = () => {
        setchecked(!checked)
    }
  return (
    <div className='singleitem'>
     <div className="first">
     <input type="checkbox" checked={checked} onChange={checking}/>
     <p style={{textDecoration: checked && 'line-through'}}>{values}</p>
     </div>
     <button className='button' onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default SingleItem