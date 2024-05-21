import { createContext, useState } from "react"
import { userCad, userLogin } from "../interfaces/UserTopMovies";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

interface UserTopMovie {
    children: React.ReactNode
}

export const UserProvider = ({children}: UserTopMovie) => {

    const [user, setUser] = useState(null);
    const [register, setRegister] = useState(null);
    const [page, setPage] = useState(null);

    const userRegister = async (payload: userCad) => {

        try {
          const { data } = await api.post("/users"); 
          localStorage.setItem("@kenzieMovie:token", data.token);

          toast.success("Usuario criado com sucesso.", {autoClose:2000}) 

          setUser(data.user);
 
        } catch (error) {
            toast.error("Email já existente");
        }
    }


    const userLogin = async (payload: userLogin) => {
        try {
            const { data } = await api.post("/login", payload);

            localStorage.setItem("@kenzieMovie:token", data.token);
              toast.success("Login realizado com sucesso.", {autoClose:2000}) 
            
              setUser(data.user);
        } catch (error) {
            toast.error("Email ou senha inválida");
        }
    };

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@kenzieHub:token");
    };

    return (
        <UserContext.Provider value={{user, setUser, register, setRegister, page, setPage, userRegister, userLogin, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}