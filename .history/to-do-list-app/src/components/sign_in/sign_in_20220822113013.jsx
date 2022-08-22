import React, { useState } from 'react';
import LoginInputForm from '../login_input_form/login_input_form';
import style from '../sign_in/sign_in.module.css'

const SignIn = ({goToSignUp}) => {
    const handleSignInSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }
    let emailValid = false
    let passwordValid = false
    const [inputValidation, setInputValidation] = useState(false)
    const checkValid = (event) => {
        console.dir(event.target.form[0])
        console.dir(event.target.form[1] )
        if(event.target.id === 'inputEmail'){
            let emailInput = event.target.value;
            if(emailInput.includes('@')){
                const atIndex = emailInput.indexOf('@');
                const id = emailInput.substr(0, atIndex);
                const domain = emailInput.substr(atIndex+1);
                const allowList = ['.org', '.com', '.net']
                if (id !== '' && allowList.includes(domain.substr(-4))){
                    emailValid = true
                } else{
                    emailValid = false
                }
            } else {
                emailValid = false
            }
        }
        if(event.target.id === 'inputPassword'){
            if(event.target.value.length >= 8){
                passwordValid = true
            } else {
                passwordValid = false
            }
        }
        if (emailValid && passwordValid){
            setInputValidation(true)
        } else{
            setInputValidation(false)
        }
        
    }
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <LoginInputForm
            handleSubmit={handleSignInSubmit}
            submitContent={'Sign in'} 
            checkValid={checkValid}
            inputValidation={inputValidation}
            />
            <span className={style.signUpText}>If you don't have an account yet? &gt; </span>
            <button className={style.signUpButton} onClick={goToSignUp}>Sign Up</button>
        </div>
    )
}

export default SignIn;