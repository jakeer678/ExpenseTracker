 const AppReducer = (state, action) => {
   
switch(action.type) {

    case 'DELETE_TRANSCTION':
        return {
            ...state,
            transactions: state.trasactions.filter(transction => transction.id !== action.payload)
        }
        case 'ADD_TRANSACTION' :
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
           
        }
        
    default:
        return state;
}
}

export default AppReducer