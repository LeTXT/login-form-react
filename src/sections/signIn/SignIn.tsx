import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuMail as Mail, LuLock as Lock } from "react-icons/lu";

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
        <div className='singIn'>
            <div>
                <h1>Faça login para continuar</h1>
            </div>

            <CustomInput 
            inputType='email'
            errorMessage='Email inválida'
            placeholder='Email' 
            state={email}  
            setState={setemail} 
            Icon={Mail}
            isValid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            />

            <CustomInput 
            inputType='password'
            errorMessage='Senha inválida'
            placeholder='Senha' 
            state={password}  
            setState={setPassword} 
            Icon={Lock}
            isValid={password.length < 8}
            />

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
