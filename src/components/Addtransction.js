import React, { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSlice'

const Addtransction = () => {

const {addTransction } = useContext(GlobalContext)

const [text, setText] = useState('')
const [amount, setAmount] = useState('')



function onSubmit (e) {
    e.preventDefault();
    const newTransction ={
        id: Math.floor(Math.random() *10000000),
        text,
        amount: +amount
    }
    addTransction(newTransction)

}


  return (
    <>
        <form onSubmit={onSubmit}>
        <h1>Add new transction</h1>
            <div className='form-control'>
<label htmlFor='text'>Text</label>
<input type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text...' />
            </div>
            <div className='form-control'>
            <label htmlFor='amount'>Amount (negative-expence-positve-income)</label>
<input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount...' />
            </div>
            <button className='btn'>Add Transction </button>
        </form>
    </>
  )
}

export default Addtransction
