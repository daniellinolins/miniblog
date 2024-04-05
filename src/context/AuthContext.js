import {useContext, createContext} from "react";

const AuthContext = createContext()

export function  AuthProvider({children, value}) {
    return <AuthContext.provider value={value}>{children}</AuthContext.provider>
}

export function useAuthValue(){
    return useContext(AuthContext)
}