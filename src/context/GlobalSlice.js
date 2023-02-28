import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//initialStae
const initialState = {
    transactions: [
        {id:1, text: 'flower', amount: -20},
        {id:2, text: 'rose', amount: 30},
        {id:3, text: 'book', amount: 80}
    ]
}

//createContext

export const GlobalContext = createContext();

//Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransction (id) {
    dispatch({
        type: 'DELETE_TRANSCTION',
        payload : id
    })
}

function addTransction(tradnction) {y
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: tradnction
    })
} 


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransction,
        addTransction

    }}>
        {children}
    </GlobalContext.Provider>)
}