import { useState, useEffect } from "react";
import { LuEye as Eye, LuEyeClosed as ClosedEye } from "react-icons/lu";
import { LuMail as Mail, LuLock as Lock, LuUser as User } from "react-icons/lu";

import './components.scss'

interface CostumProps {
    errorMessage: string;
    placeholder: string;
    state: string;
    setState: (value: string) => void;
    inputType: string;
    isValid?: boolean | ((value: string) => boolean);
}

function CustomInput({ errorMessage, placeholder, state, setState, inputType, isValid}: CostumProps) {
    const [passwordToggle, setPasswordToggle] = useState<boolean>(false)

    const [inputBlur, setInputBlur] = useState<boolean>(false)
    const [inputValidation, setInputValidation] = useState<string>('error hide')

    useEffect(() => {
        if (inputBlur) {
            if (isValid) {
                setInputValidation('error');
            } else {
                setInputValidation('error hide');
            }
        }

    }, [inputBlur, state, isValid]);  

    const handleInputInput = (state: string) => {
        setState(state);
    };

    const handleInputBlur = () => {
        if (state !== '') {
            setInputBlur(true);
        }
    };

    const selectIcon = () => {
        if(inputType === 'password') {
            return <Lock size={16} />
        } 
        if(inputType === 'email') {
            return <Mail size={16} />
        }
        if(inputType === 'user') {
            return <User size={16} />
        }
    }

    return (
        <div className="password">
            <div className={inputValidation}>
                <p>{errorMessage}</p>
            </div>
            <div className='input' >
                <div>
                    {selectIcon()}
                </div>
                <input 
                    type={inputType === 'password' ? passwordToggle ? 'text' : 'password' : inputType === 'email' ? 'email' : 'text'} 
                    onChange={(e) => handleInputInput(e.target.value)}
                    onBlur={handleInputBlur}
                    placeholder={placeholder}
                />
                <div className="icon" onClick={() => setPasswordToggle((prev) => !prev)} >
                    { inputType === 'password' ? passwordToggle ? <Eye size={16} /> : <ClosedEye  size={16} /> : '' }
                </div>
            </div>
        </div>
    )
}

export default CustomInput