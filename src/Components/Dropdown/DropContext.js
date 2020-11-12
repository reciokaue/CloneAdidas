import React, {createContext, useContext, useState} from 'react';

export const DropContext = createContext()

export default function DropProvider({ children }) {
    const [globalDrop, setglobal] = useState(0)
    const [globalDrop2, setglobal2] = useState(0)

    return (
        <DropContext.Provider
            value={{
                globalDrop, setglobal,
                globalDrop2, setglobal2
            }}
        >
            {children}
        </DropContext.Provider>
    );
}

export function useDrop(){
    const context = useContext(DropContext)
    const { globalDrop, setglobal, globalDrop2, setglobal2 } = context
    return { globalDrop, setglobal, globalDrop2, setglobal2 }
}
