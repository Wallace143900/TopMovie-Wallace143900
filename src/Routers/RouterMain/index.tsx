import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/LoginPage"
import { RegisterPage } from "../../pages/RegisterPage"
import { Dashboard } from "../../pages/Dashboard"
import { ErrorPage } from "../../pages/ErrorPage"

export const RouterMain = () => {
    return (
        <Routes>
            <Route>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            </Route>

            <Route>
            <Route path="/user" element={<Dashboard />}/>
            </Route>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    )
}