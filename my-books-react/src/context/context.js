import React from "react";

// criando o contexto
export const MyContext = React.createContext({});

export function MyProvider({ children }) {
    

    return (
        <MyContext.Provider
            value={{}}
        >
            {children}
        </MyContext.Provider>
    );
}
