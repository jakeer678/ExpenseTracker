import React from 'react'
import { GlobalContext } from '../context/GlobalSlice';
import { useContext } from 'react';


const TransList = ({transction}) => {

const {deleteTransction} = useContext(GlobalContext)


   const sign =transction.amount < 0 ? '-' : '+';

  return (
    <li className={transction.amount < 0 ? 'minus' : 'plus'} >
    {transction.text} <span className="value">{sign} ${Math.abs(transction.amount)}</span>
      <button onClick={() => deleteTransction(transction.id)} className="-deletebtn"> x</button>
    </li> 
  )
}

export default TransList
