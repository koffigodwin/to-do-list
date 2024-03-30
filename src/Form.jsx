import React, { useState } from 'react'
import './style.css'
import {toast } from 'react-toastify'

const Form = ({AddItem}) => {
    const [itemName , setItemName] = useState('')
    const handlesubmit = (e) =>{
        e.preventDefault();
        if (!itemName) {
            return toast.error("Please write something before submiting")
        }
        AddItem(itemName)
        setItemName('')
        toast.success("you have successfull add a new item");
    }
    const handlechange = (event) =>{
     setItemName(event.target.value)
    }
  return (
    <div className='form-component'>
        <form className='form'onSubmit={handlesubmit}>
            <input type="text" value={itemName} onChange={handlechange}/>
            <button className='btn' type='submit'>Submit Item</button>
        </form>
    </div>
  )
}

export default Form