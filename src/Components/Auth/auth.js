import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(
        JSON.parse(sessionStorage.getItem('login')) ?? false
    )
    const [user, setUser] = useState(null);
    // const baseURL="https://newmotifapi.elscript.co"
    const baseURL = "http://localhost:8000"
    const login = (user) => {
        setUser(user);
        setIsLogin(true)
        console.log(isLogin)
    }

    const logout = () => {
        setUser(null)
        setIsLogin(false)
    }

    useEffect(() => {
        sessionStorage.setItem('login', isLogin)
    }, [isLogin])
    return (
        <AuthContext.Provider value={{ user, isLogin, setIsLogin, login, logout, baseURL }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return (useContext(AuthContext))
}