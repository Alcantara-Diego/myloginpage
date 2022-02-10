import React from 'react';
import loginSvg from '../assets/loginsvg.svg'


function Login(){

    return(
        <div className="loginContainer">
            
            <div className='loginContentContainer'>

                {/* Opening button to go back home */}
                <a href='/myloginpage' className='goBackHome'><i className="bi bi-arrow-left-circle"></i>
                </a>
                {/* Closing button to go back home */}

                {/* Opening login section */}
                <div className="formContainer">
                    <header className="formHeader">
                        <img src={loginSvg} alt=''></img>
                    </header>
                    <form>
                        <h2 className='text-center primaryColor'>Login</h2>
                        <p className="inputDescription">Email</p>
                        <input type="text" required></input>
                        <p className="inputDescription">Senha</p>
                        <input type="text" required></input>

                        <div className='d-flex flex-row justify-content-between align-items-end mt-1'>
                            <div className='d-flex flex-row align-items-center'>
                                <input type="checkbox" id='rememberMe'></input>
                                <label htmlFor="rememberMe" className='mx-1'>Lembrar de mim</label>
                            </div>

                            <p className='forgotPassword mb-0'>Esqueceu a senha?</p>
                        </div>

                        

                        <button className='actionBtn'>Entrar</button>

                        <div className='mobileSignUpSugestion'>
                            <p className='mt-1 mb-0'>Ainda não tem  uma conta? </p>
                            <a href="/myloginpage/#/signup" className="mobileLink">Cadastrar-se</a>
                        </div>
                    </form>
                </div>
                {/* Closing login section  */}


                {/* Opening sign in suggestion section */}
                <section className='signInSugestionSection'>
                    <div className='info'>
                        <h3 className='welcomeMsg'>Bem vindo de volta!</h3>
                        <p>Ainda não tem conta? Vamos criar uma agora.</p>
                        <a href="/myloginpage/#/signup" className="suggestionBtn actionBtn">Cadastrar-se</a>
                    </div>


                    <div className='decoration circle1'></div>
                    <div className='decoration square1'></div>
                    <div className='decoration form1'></div>
                    <div className='decoration form2'></div>
                </section>
                {/* Closing sign in suggestion section */}

            </div>
        </div>
    )

}

export default Login;