import React from 'react';
import style from '../sign_up/sign_up.module.css'
import LoginInputForm from '../login_input_form/login_input_form';
import { useState } from 'react';
const SignUp = ({ checkEmailValid, checkPasswordValid }) => {
    const [inputValidation, setInputValidation] = useState(false)
    const checkValid = async (event) => {
        const emailInput = event.target.form[0].value;
        const passwordInput = event.target.form[1].value;

        const emailValid = await checkEmailValid(emailInput)
        const passwordValid = await checkPasswordValid(passwordInput)
        if (emailValid && passwordValid){
            setInputValidation(true)
        } else{
            setInputValidation(false)
        }
    }
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value, " ",event.target[1].value );
    }
    return(
        <div className={style.signUp}>
            <h1>Sign Up</h1>
            <LoginInputForm
            handleSubmit={handleSignUpSubmit}
            submitContent={'Sign Up'} 
            checkValid={checkValid}
            inputValidation={inputValidation}
            />
        </div>
    )
}

export default SignUp;