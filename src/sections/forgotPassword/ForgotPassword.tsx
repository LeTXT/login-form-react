import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import CustomInput from "../../components/CustomInput"

import './forgotPassword.scss'
import SendButton from '../../components/SendButton'

function ForgotPassword() {
    const [email, setemail] = useState<string>('')

    const navigate = useNavigate()

    const handleSignUpClick = () => {
        navigate("/")
    }

    return (
        <div className='forgotPassword fade-in-down'>
            <div>
                <h1>Recuperar senha</h1>
            </div>

            <CustomInput 
                inputType='email'
                errorMessage='Email inválida'
                placeholder='Email' 
                state={email}  
                setState={setemail} 
                isValid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            />

            <SendButton submit='Enviar' />

            <div className='backToLogin'>
                <p onClick={handleSignUpClick}>Voltar ao login</p>
            </div>
        </div>
    )
}

export default ForgotPassword