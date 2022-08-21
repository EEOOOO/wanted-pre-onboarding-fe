import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignUp = (props) => {
    return(
        <div className={style.signUp}>
            <h1>Sign Up</h1>
            <LoginInputForm handleSubmit={handleSignUpSubmit}/>
        </div>
    )
}

export default SignUp;