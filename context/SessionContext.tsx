import React, { FC, createContext, ReactNode, useState } from 'react';
import { useContext } from 'react';

interface SessionContextType {
    isLoggedIn: boolean,
    userData?: any,
    setIsLoggedIn?: React.Dispatch<React.SetStateAction<boolean>>,
    setUserData?: React.Dispatch<React.SetStateAction<undefined>>,
}

const defaultValue = {
    isLoggedIn: false,
    userData: undefined,
}

export const SessionContext = createContext<SessionContextType>(defaultValue);

interface SessionProviderProps {
    children: ReactNode
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState();

    return <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}>
        {children}
    </SessionContext.Provider>
}

export const useUserData = () => {
    const context = useContext(SessionContext);

    return context.userData
}

export default SessionProvider;