import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import CustomInput from '../../components/CustomInput'
import SendButton from '../../components/SendButton'
import AnotherMethod from '../../components/AnotherMethod'

import './signUp.scss'
import { arrayObj } from '../../assets/registrations';

function SignUp () {
    const [user, setUser] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/")
    }

    const isUserValid = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/.test(user)
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 8;
    const isConfirmPasswordValid = password === confirmPassword;


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        const newObj = {
            user: user,
            email: email,
            password: password
        }
    
        arrayObj.push(newObj)
    
        console.log(arrayObj)

        handleSignUpClick()
    }

    return (
        <div className='signUp fade-in-right'>

            <div>
                <h1>Cadastre-se</h1>
            </div>
            <form onSubmit={handleSubmit}>

            <CustomInput 
            inputType='user'
            errorMessage='Nome inválido'
            placeholder='Nome completo'
            state={user}  
            setState={setUser} 
            isValid={isUserValid}
            />

            <CustomInput 
            inputType='email'
            errorMessage='Email inválida'
            placeholder='Email' 
            state={email}  
            setState={setemail} 
            isValid={isEmailValid}
            />

            <div className='flexPassword'>
            <CustomInput 
            inputType='password'
            errorMessage='Senha inválida'
            placeholder='Senha' 
            state={password}  
            setState={setPassword} 
            isValid={isPasswordValid}
            />

            <CustomInput 
            inputType='password'
            errorMessage='Senha inválida'
            placeholder='Senha' 
            state={confirmPassword}  
            setState={setConfirmPassword} 
            isValid={isConfirmPasswordValid}
            />
            </div>
            
            <SendButton submit='Criar' isDisabled={!(isEmailValid && isPasswordValid && isUserValid && isConfirmPasswordValid)}/>

            </form>

            <AnotherMethod />

            <div className='backToSingIn'>
                <p onClick={handleSignUpClick}>Voltar a tela de login</p>
            </div>

        </div>
    )
}

export default SignUp
