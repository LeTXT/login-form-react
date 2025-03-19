import React, { useState, useEffect } from "react";
import { LuEye as Eye, LuEyeClosed as ClosedEye } from "react-icons/lu";

import './components.scss'

interface CostumProps {
    errorMessage: string;
    placeholder: string;
    state: string;
    setState: (value: string) => void;
    Icon: React.ElementType;
    inputType: string;
    isValid?: boolean | ((value: string) => boolean);
}

function CustomInput({ errorMessage, placeholder, state, setState, Icon, inputType, isValid}: CostumProps) {
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

    return (
        <div className="password">
            <div className={inputValidation}>
                <p>{errorMessage}</p>
            </div>
            <div className='input' >
                <Icon size={16}/>
                <input 
                    type={inputType === 'password' ? passwordToggle ? 'text' : 'password' : inputType} 
                    onChange={(e) => handleInputInput(e.target.value)}
                    onBlur={handleInputBlur}
                    placeholder={placeholder}
                />
                <button onClick={() => setPasswordToggle((prev) => !prev)}>
                    { inputType === 'password' ? passwordToggle ? <Eye size={16} /> : <ClosedEye  size={16} /> : '' }
                </button>
            </div>
        </div>
    )
}

export default CustomInput