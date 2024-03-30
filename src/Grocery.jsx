import React, { useState } from 'react'
import Form from './Form';
import './style.css'
import Itemplace from './Itemplace';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify'


const Grocery= () => {
    const [item ,setitem] = useState([]);
    const AddItems = (items)=>{
        const newitem = {
            checkplace : false,
            values: items,
            id : nanoid()
        }
        setitem([...item , newitem]);
    }
    const removeItem = (id) =>{
    const newitem = item.filter((item) =>
       item.id !== id
    )
    setitem(newitem)
    toast.success("Item deleted successful...")
    } 
  return (
    <div className='section-center'>
        <h1>TO-DO LIST </h1>
        <Form  AddItem={AddItems} />
       <Itemplace items ={item} removeItem ={removeItem} />
    </div>
  )
}

export default Grocery