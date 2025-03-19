import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomInput from '../../components/CustomInput'
import SendButton from "../../components/SendButton";
import AnotherMethod from "../../components/AnotherMethod";

import './signIn.scss'


function SingIn() {
    const [email, setemail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/signup")
    }

    const handleForgotPasswordClick = () => {
        navigate("/forgot-password"); 
    };
    
    return (
        <div className='singIn fade-in-up'>
            <div>
                <h1>Faça login para continuar</h1>
            </div>
            <form>
                <CustomInput 
                inputType='email'
                errorMessage='Email inválida'
                placeholder='Email' 
                state={email}  
                setState={setemail} 
                isValid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                />

                <CustomInput 
                inputType='password'
                errorMessage='Senha inválida'
                placeholder='Senha' 
                state={password}  
                setState={setPassword} 
                isValid={password.length < 8}
                />
            </form>
            

            <div className='forgotPassword'>
                <p onClick={handleForgotPasswordClick}>esqueceu a senha?</p>
            </div>

            <SendButton submit='Entrar' />

            <AnotherMethod />

            <div className="signOut">
                <p>não tem conta?</p>
                <p onClick={handleSignUpClick}>Cadastre-se</p>
            </div>
        </div>
    )
}

export default SingIn
