import { createContext, useContext, useState } from 'react';

const SharedDataContext = createContext();

export const useSharedData = () => {
    return useContext(SharedDataContext);
};

export const SharedDataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    return (
        <SharedDataContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </SharedDataContext.Provider>
    );
};
