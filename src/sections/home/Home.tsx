import { useNavigate } from "react-router-dom";

import './home.scss'

function Home() {

    const navigate = useNavigate()

    const handleSignUpClick = () => {
        navigate("/")
    }

    return(
        <div className="home fade-in-up">

            <div className="backToLogin">
                <p onClick={handleSignUpClick}>Voltar a tela de login</p>
            </div>
            
            <div>
                <h1>Página inicial</h1>
                <p>Descubra mais projetos e aplicações desenvolvidos por mim.</p>
                <a href="https://letxt.github.io/my-portfolio/">Meu portfólio</a>
            </div>
            <div>
                <a href="https://github.com/LeTXT">Projetos</a>
            </div>
            
        </div>
    )
}

export default Home