import './components.scss'

interface ButtonProps {
    submit: string
}

function SendButton({submit}: ButtonProps) {
    return (
        <div className="button">
            <button type="submit">{submit}</button>
        </div>
    )
}

export default SendButton