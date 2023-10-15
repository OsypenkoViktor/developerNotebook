import React, { createContext, useContext } from "react";
import {usePopup} from "@/Components/Hooks/usePopup.js";

const PopupContext = createContext();

export function usePopupContext() {
    return useContext(PopupContext);
}

export function PopupProvider({ children }) {
    const popup = usePopup();

    return (
        <PopupContext.Provider value={popup}>
            {children}
        </PopupContext.Provider>
    );
}
