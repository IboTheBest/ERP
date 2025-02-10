import React, { createContext, useState } from "react";

export const Context = createContext()

export const UsingContext = ({children}) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token"))||null)
    const [collapsed, setCollapsed] = useState(false);
    localStorage.setItem("token", JSON.stringify(token))
    const [refresh, setRefresh] = useState(false)
    
    return (
        <Context.Provider value={{token,refresh,setRefresh, setToken,collapsed, setCollapsed}}>
            {children}
        </Context.Provider>
    )
}