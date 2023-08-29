import { Action } from '@remix-run/router';
import React, { createContext,useContext, useReducer } from 'react'

const cartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case "ADD":
            return [...state,{id: action.id, name: action.name, qty: action.qty, size: action.size, price:action.price, img:action.img}]
        
            default:
                console.log("Error in Reducer");
    }

}

export const CartProvider = ({children})=>{
 
const[state,dispatch] = useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <cartStateContext.Provider value={state}>
        {children}
    </cartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);