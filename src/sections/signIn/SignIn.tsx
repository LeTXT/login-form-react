import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrayObj } from '../../assets/registrations'

import CustomInput from '../../components/CustomInput'
import SendButton from "../../components/SendButton";
import AnotherMethod from "../../components/AnotherMethod";

import './signIn.scss'

function SingIn() {
    const [errorLogin, setErrorLogin] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/signup")
    }

    const handleForgotPasswordClick = () => {
        navigate("/forgot-password"); 
    };

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = password.length >= 8

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newObj = {
            email: email,
            password: password
        }

        const index = arrayObj.findIndex(obj => 
            obj.email === newObj.email && obj.password === newObj.password
        )

        if (index !== -1) {
            setErrorLogin('')
            navigate("/home")
        }
        else {
            setErrorLogin('Email ou senha inválidos')
        }
        
    }
    
    return (
        <div className='singIn fade-in-up'>
            <div className="errorLogin">
                <p>{errorLogin}</p>
            </div>
            <div>
                <h1>Faça login para continuar</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <CustomInput 
                inputType='email'
                errorMessage='Email inválida'
                placeholder='Email' 
                state={email}  
                setState={setemail} 
                isValid={isEmailValid}
                />

                <CustomInput 
                inputType='password'
                errorMessage='Senha inválida'
                placeholder='Senha' 
                state={password}  
                setState={setPassword} 
                isValid={isPasswordValid}
                />
            
            

                <div className='forgotPassword'>
                    <p onClick={handleForgotPasswordClick}>esqueceu a senha?</p>
                </div>

                <SendButton 
                submit='Entrar' 
                isDisabled={!(isEmailValid && isPasswordValid)} 
                />
            </form>

            <AnotherMethod />

            <div className="signOut">
                <p>não tem conta?</p>
                <p onClick={handleSignUpClick}>Cadastre-se</p>
            </div>
        </div>
    )
}

export default SingIn
