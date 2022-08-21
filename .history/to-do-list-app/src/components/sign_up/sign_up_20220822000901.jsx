import React from 'react';
import style from '../sign_up/sign_up.module.css'
import LoginInputForm from '../login_input_form/login_input_form';

const SignUp = (props) => {
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }
    return(
        <div className={style.signUp}>
            <h1>Sign Up</h1>
            <LoginInputForm handleSubmit={handleSignUpSubmit} submitContent={'Sign Up'}/>
        </div>
    )
}

export default SignUp;