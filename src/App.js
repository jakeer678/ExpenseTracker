import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import Income from "./components/Income";
import Transction from "./components/Transction";
import Addtransction from "./components/Addtransction";
import { GlobalProvider } from "./context/GlobalSlice";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div>
        <Balance />
        <Income />
        <Transction />
        <Addtransction />
      </div>
    </GlobalProvider>
  );
};

export default App;
