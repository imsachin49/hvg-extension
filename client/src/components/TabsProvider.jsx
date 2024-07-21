/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
const TabsContext = createContext();

export function TabsProvider({ children }) {
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const savedTabs = JSON.parse(localStorage.getItem('tabs')) || [];
        setTabs(savedTabs);
    }, []);

    const addTab = (newTab) => {
        const updatedTabs = [...tabs, newTab];
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
        setTabs(updatedTabs);
    };

    return (
        <TabsContext.Provider value={{ tabs, addTab }}>
            {children}
        </TabsContext.Provider>
    );
}

export function useTabs() {
    return useContext(TabsContext);
}
