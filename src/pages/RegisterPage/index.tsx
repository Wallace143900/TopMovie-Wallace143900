import { RegisterForm } from "../../components/forms/RegisterForm"

export const RegisterPage = () => {
    return (
        <main>
            <form>
                <div>
                    <h1>Cadastro</h1>
                    <button>Voltar</button>
                </div>
                <div>
                    <p>Preencha os campos para cadastrar-se</p>
                    <RegisterForm />
                    <button>Cadastrar-se</button>
                </div>
            </form>
        </main>
    )
}