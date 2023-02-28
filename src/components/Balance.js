
import React from "react";
import { GlobalContext } from "../context/GlobalSlice";
import { useContext } from "react";


const Balance = () => {

    const { transactions } = useContext(GlobalContext)
const amounts = transactions.map(transaction => transaction.amount);
const total = amounts.reduce((acc, item) => (acc + item)).toFixed(2)
  return (
    <div className="balance">
      <h4>Your Balnce </h4>
      <h1 id="balance">${total}</h1>
    </div>
  );
};

export default Balance;
