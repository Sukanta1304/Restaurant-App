import { createContext, useReducer, useState } from "react";

export const AppContext= createContext();
function AppContextProvider({children}) {
    const [token, setToken] = useState("");
    const [isAuth, setIsAuth] = useState(false)
    return(
            <AppContext.Provider value={{token,isAuth,setToken,setIsAuth}}>
            {children}
            </AppContext.Provider>
    )
}

export default AppContextProvider;
