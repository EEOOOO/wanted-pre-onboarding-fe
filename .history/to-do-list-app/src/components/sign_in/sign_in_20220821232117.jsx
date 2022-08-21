import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignIn = ({img, goToSignUp}) => {
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <form className={style.siginForm}>
                <div className={style.email}>
                    <span className={style.titleEmail}>Email </span>
                    <input 
                    type="text" 
                    className={style.inputEmail} 
                    placeholder='Email'></input>
                </div>
                <div className={style.password}>
                    <span className={style.titlePassword}>Password</span>
                    <input 
                    type="text" 
                    className={style.inputPassWord}
                    placeholder='Password'></input>
                </div>
                <button type="submit" className={style.submitButton}>submit</button>
            </form>
        </div>
    )
}

export default SignIn;