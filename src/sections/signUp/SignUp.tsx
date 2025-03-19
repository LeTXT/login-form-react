import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { LuUser as User, LuMail as Mail, LuLock as Lock } from "react-icons/lu";

import CustomInput from '../../components/CustomInput'
import SendButton from '../../components/SendButton'

import './signUp.scss'

function SignUp () {
    const [user, setUser] = useState<string>('')
    const [email, setemail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate("/")
    }

    return (
        <div className='signUp'>

            <div>
                <h1>Cadastre-se</h1>
            </div>

            <CustomInput 
            inputType='user'
            errorMessage='Nome inválido'
            placeholder='Nome completo'
            state={user}  
            setState={setUser} 
            Icon={User}
            isValid={false}
            />

            <CustomInput 
            inputType='email'
            errorMessage='Email inválida'
            placeholder='Email' 
            state={email}  
            setState={setemail} 
            Icon={Mail}
            isValid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
            />

            <div className='flexPassword'>
            <CustomInput 
            inputType='password'
            errorMessage='Senha inválida'
            placeholder='Senha' 
            state={password}  
            setState={setPassword} 
            Icon={Lock}
            isValid={password.length < 8}
            />

            <CustomInput 
            inputType='password'
            errorMessage='Senha inválida'
            placeholder='Senha' 
            state={confirmPassword}  
            setState={setConfirmPassword} 
            Icon={Lock}
            isValid={password !== confirmPassword}
            />
            </div>
            
            <SendButton submit='Criar' />

            <div className='backToSingIn'>
                <p onClick={handleSignUpClick}>Voltar a tela de login</p>
            </div>

        </div>
    )
}

export default SignUp
