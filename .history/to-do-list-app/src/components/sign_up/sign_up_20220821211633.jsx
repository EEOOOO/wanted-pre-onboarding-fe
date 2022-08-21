import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignUp = (props) => {
    return(
        <div className={style.signUp}>
            <h1>Sign in</h1>
            <form className={style.sigupForm}>
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