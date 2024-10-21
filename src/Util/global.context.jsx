import { createContext,useContext,useEffect, useState } from "react";
import { useReducer} from "react";
import reducer from '../reducer/reducer';


export const contextoGlobal=createContext();

export const initialState={
    isBurguer:false,  // Estado de la hamburguesa del header inicia en falso.
    valueSelectNavbar:"", // Estado que maneja el valor del select de la navegacion en el header.

}

const ContextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState)

    
//-------------------------------------------------------------------------------------------------------------------------
    return(
        <contextoGlobal.Provider value={{
            state,dispatch
          }}>
            {children}
          </contextoGlobal.Provider>
    )
}

export default ContextProvider

export const useContextGlobal=()=> useContext(contextoGlobal)

