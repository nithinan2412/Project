import React,{ createContext, useContext } from "react";

const UserContext = createContext();

export const Provider = ({children, setUserid , userid}) =>{
    return <UserContext.Provider value={{
        setUserid, userid
    }}> {children}</UserContext.Provider>
}
export const UseUser = () => useContext(UserContext)