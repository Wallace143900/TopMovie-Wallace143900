import { useForm } from "react-hook-form";
import { LoginPage } from "../../../pages/LoginPage"
import { TLoginFormValues, loginFormSchema } from "../../forms/LoginForm/loginForm.schema.js";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {

    interface ILoginFormValues {
        email: string;
        password: string;
     }       

    const onSubmit = async (data: TLoginFormValues) => {
        LoginPage(data);
    }

    const {handleSubmit, register, formState: {errors},} = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema),
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <p>ou</p>
            <button>Cadastre-se</button>
        </form>
    )
}