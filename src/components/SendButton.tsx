import './components.scss'

interface ButtonProps {
    submit: string,
    isDisabled: boolean
}

function SendButton({submit, isDisabled}: ButtonProps) {
    return (
        <div className="button">
            <button type="submit" disabled={isDisabled} >{submit}</button>
        </div>
    )
}

export default SendButton