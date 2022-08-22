import React from 'react';
import LoginInputForm from '../login_input_form/login_input_form';
import style from '../sign_in/sign_in.module.css'

const SignIn = ({goToSignUp}) => {
    const handleSignInSubmit = (event) => {
        //event.preventDefault();
        console.log(event);
    }
    const checkValid = (event) => {
        if(event.target.value);
    }
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <LoginInputForm handleSubmit={handleSignInSubmit} submitContent={'Sign in'} checkValid={checkValid}/>
            <span className={style.signUpText}>If you don't have an account yet? &gt; </span>
            <button className={style.signUpButton} onClick={goToSignUp}>Sign Up</button>
        </div>
    )
}

export default SignIn;