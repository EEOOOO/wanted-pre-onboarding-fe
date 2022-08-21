import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignIn = (props) => {
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <form className={style.siginForm}>
                <input type="text" className={style.inputEmail}></input>
                <input type="text" className={style.inputPassWord}></input>
                <button type="submit" className={style.submitButton}></button>
            </form>
        </div>
    )
}

export default SignIn;