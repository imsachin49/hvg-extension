/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from 'react';
const TabsContext = createContext();

export function TabsProvider({ children }) {
    const [tabs, setTabs] = useState([]);
    const [googleTab,setGoogleTab] = useState([]);
    useEffect(() => {
        const savedTabs = JSON.parse(localStorage.getItem('tabs')) || [];
        setTabs(savedTabs);
        const savedGoogleTabs = JSON.parse(localStorage.getItem('googletabs')) || [];
        setGoogleTab(savedGoogleTabs);
    }, []);

    const addTab = (newTab) => {
        const index=tabs.length;
        newTab.id=index+1;
        const updatedTabs = [...tabs, newTab];
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
        setTabs(updatedTabs);
    };

    
    const removeTab = (tabToRemove) => {
        const updatedTabs=tabs.filter(tab => tab.id !== tabToRemove.id);
        localStorage.setItem('tabs', JSON.stringify(updatedTabs));
        setTabs(updatedTabs);
    };

    const addGoogleTab = (newTab) => {
        const index=googleTab.length;
        newTab.id=index+1;
        console.log(newTab);
        const updatedTabs = [...googleTab, newTab];
        localStorage.setItem('googletabs', JSON.stringify(updatedTabs));
        setGoogleTab(updatedTabs);
    };

    
    const removeGoogleTab = (tabToRemove) => {
        const updatedTabs=googleTab.filter(tab => tab.id !== tabToRemove.id);
        localStorage.setItem('googletabs', JSON.stringify(updatedTabs));
        setGoogleTab(updatedTabs);
    };

    return (
        <TabsContext.Provider value={{ tabs, googleTab , addGoogleTab, removeGoogleTab ,addTab,removeTab }}>
            {children}
        </TabsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTabs() {
    return useContext(TabsContext);
}
