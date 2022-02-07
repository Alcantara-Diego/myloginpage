import React from "react";
import signupSvg from '../assets/signupsvg.svg'

function signup(){


    return(
        <div className="loginContainer">
            
            <div className='loginContentContainer'>

                {/* Opening sign in sugestion section */}
                <section className='signInSugestionSection'>
                    <div className='info'>
                        <h3 className='welcomeMsg'>Bem vindo aos nossos serviços!</h3>
                        <p>Já possui uma conta? Entre aqui.</p>
                        <a href="/myloginpage/#/login" className="suggestionBtn actionBtn">Entrar</a>
                    </div>


                    <div className='decoration circle1'></div>
                    <div className='decoration square1'></div>
                    <div className='decoration form1'></div>
                    <div className='decoration form2'></div>
                </section>
                {/* Closing sign in sugestion section */}


                {/* Opening sign up section */}
                <div className="formContainer position-relative">

                    {/* Opening button to go back home */}
                    <a href='/myloginpage' className='goBackHome'>
                        <i className="bi bi-arrow-left-circle"></i>
                    </a>
                    {/* Closing button to go back home */}


                    <header className="formHeader signUpHeader">
                        <img src={signupSvg} alt=''></img>
                    </header>

                    <form>
                        
                        <h2 className='text-center primaryColor'>Criar conta</h2>
                        <p className="inputDescription">Nome de usuário</p>
                        <input type="text" required></input>
                        <p className="inputDescription">Email</p>
                        <input type="text" required></input>
                        <p className="inputDescription">Senha</p>
                        <input type="text" required></input>

                        

                        <button className='actionBtn'>Cadastrar-se</button>

                        <div className='mobileSignUpSugestion'>
                            <p className='mt-1 mb-0'>Já possui uma conta? </p>
                            <a href="/myloginpage/#/login"  className="mobileLink">Conectar-se</a>
                        </div>
                    </form>
                </div>
                {/* Closing sign up section  */}

            </div>
        </div>
    )
}

export default signup;