import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalSlice";
import TransList from "./TransList";


const Transction = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions, "jakakeer");

  return (
    <>
      <div>
        <h3 className="history">History</h3>
        <ul className="list">
          {transactions.map(transction => (
           <TransList key={transction.id} transction={transction} />

          ))}
        </ul>
      </div>
    </>
  );
};

export default Transction;
