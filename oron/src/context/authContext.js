import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [currentUser , setCurrentUser] = useState(
            JSON.parse(localStorage.getItem("user") )|| null
    );


    const login = ()=>{
       setCurrentUser({id: 1, 
        name: "Dinh Thinh", 
        profileImg: 
        "https://thumbs.dreamstime.com/z/icon-gentleman-image-presented-51918223.jpg",   })
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);   


    return (
        <AuthContext.Provider value = {{currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
}