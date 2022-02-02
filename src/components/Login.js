import React from 'react';
import loginSvg from '../assets/loginsvg.svg'

function Login(){

    return(
        <div className="loginContainer">
            
            <div className='loginContentContainer'>

                {/* Opening button to go back home */}
                <a href='/' className='goBackHome'><i className="bi bi-arrow-left-circle"></i>
                </a>
                {/* Closing button to go back home */}

                {/* Opening login section */}
                <div className="formContainer">
                    <header className="formHeader">
                        <img src={loginSvg} alt=''></img>
                    </header>
                    <form>
                        <h2 className='text-center'>Login</h2>
                        <p className="inputDescription">Email</p>
                        <input type="text" required></input>
                        <p className="inputDescription">Senha</p>
                        <input type="text" required></input>

                        

                        <button className='actionBtn'>Entrar</button>

                        <div className='mobileSignUpSugestion'>
                            <p className='mt-1 mb-0'>Ainda não tem  uma conta? </p>
                            <a>Cadastrar-se</a>
                        </div>
                    </form>
                </div>
                {/* Closing login section  */}


                {/* Opening sign in sugestion section */}
                <section className='signInSugestionSection'>
                    <div className='info'>
                        <h3 className='welcomeMsg'>Bem vindo de volta!</h3>
                        <p>Ainda não tem conta? Vamos criar uma agora.</p>
                        <button className='actionBtn'>Cadastrar-se</button>
                    </div>


                    <div className='decoration circle1'></div>
                    <div className='decoration square1'></div>
                    <div className='decoration form1'></div>
                    <div className='decoration form2'></div>
                </section>
                {/* Closing sign in sugestion section */}

            </div>
        </div>
    )

}

export default Login;