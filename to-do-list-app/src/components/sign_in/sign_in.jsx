import React, { useState } from 'react';
import { signIn } from '../../api';
import LoginInputForm from '../login_input_form/login_input_form';
import style from '../sign_in/sign_in.module.css';
import {useNavigate} from 'react-router-dom';

const SignIn = ({ goToSignUp, checkEmailValid, checkPasswordValid, setUserToken }) => {
    
    let navigate = useNavigate();
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
    const handleSignInSubmit = (event) => {
        event.preventDefault();
        if (inputValidation === false){
            return
        }
        const emailInput = event.target[0].value;
        const passwordInput = event.target[1].value;

        let gotoTodo = function(){
            
            if (localStorage.getItem(emailInput)){
                setUserToken(localStorage.getItem(emailInput))
                navigate("../todo", { replace: true });
            }
        }
        signIn(emailInput, passwordInput, gotoTodo);
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