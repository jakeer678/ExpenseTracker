import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalSlice'


const Income = () => {

const {transactions } = useContext(GlobalContext)

const amounts = transactions.map(tradnction => tradnction.amount)
const income = amounts.filter(item=> item>0).reduce((acc,item) => (acc+item)).toFixed(2)

const expense = amounts.filter(item => item<0).reduce((acc, item) => (acc+item)).toFixed(2)
  return (
    <div className='income'>
      <div>
        <h4>Income</h4>
        <p id="money-plus" className='money'>{income}</p>
      </div>
      <div>
<h4>Expense</h4>
<p id="money-minus" className='money'>{expense}</p>
      </div>
    </div>
  )
}

export default Income
