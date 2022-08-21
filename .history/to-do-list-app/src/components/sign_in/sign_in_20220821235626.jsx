import React from 'react';
import LoginInputForm from '../login_input_form/login_input_form';
import style from '../sign_in/sign_in.module.css'

const SignIn = ({ goToSignUp}) => {
    const handleSubmit = (event) => {
        //event.preventDefault();
        console.log(event);
    }
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <LoginInputForm handleSubmit={handleLoginSubmit}/>
            <button className={style.signUp} onClick={goToSignUp}>Sign Up</button>
        </div>
    )
}

export default SignIn;