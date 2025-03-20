import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { arrayObj } from '../../assets/registrations'

import CustomInput from "../../components/CustomInput"

import './forgotPassword.scss'
import SendButton from '../../components/SendButton'

function ForgotPassword() {
    const [errorEmail, setErrorEmail] = useState<string | null>('')
    const [email, setemail] = useState<string>('')

    const navigate = useNavigate()

    const isPasswordValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleSignUpClick = () => {
        navigate("/")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const index = arrayObj.findIndex(obj => obj.email === email)

        if (index !== -1) {
            setErrorEmail('')
            handleSignUpClick()
        }
        else {
            setErrorEmail('Email não encontrado')
        }
    }

    return (
        <div className='forgotPassword fade-in-down'>
            <div className="errorEmail">
                <p>{errorEmail}</p>
            </div>
            <div>
                <h1>Recuperar senha</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <CustomInput 
                inputType='email'
                errorMessage='Email inválida'
                placeholder='Email' 
                state={email}  
                setState={setemail} 
                isValid={isPasswordValid}
            />

            <SendButton 
            submit='Enviar' 
            isDisabled={!isPasswordValid}
            />
            </form>
            

            <div className='backToLogin'>
                <p onClick={handleSignUpClick}>Voltar ao login</p>
            </div>
        </div>
    )
}

export default ForgotPassword