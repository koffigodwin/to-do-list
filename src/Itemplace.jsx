import React from 'react'
import SingleItem from './singleItem'

const Itemplace = ({items,removeItem}) => {
  return (
    <div className='item'>
        {
            items.map((item) =>{
             return <SingleItem items={item} key={item.id} removeItem= {removeItem}/>
            })
        }
    </div>
  )
}

export default Itemplace