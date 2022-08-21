import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignUp = (props) => {
    return(
        <div className={style.signUp}>
            <h1>Sign Up</h1>
            <form className={style.sigupForm}>
            <div className={style.email}>
                    <label className={style.titleEmail}>Email 
                        <input 
                        type="text" 
                        className={style.inputEmail} 
                        placeholder='Email'></input>
                    </label>
                </div>
                <div className={style.password}>
                    <label className={style.titlePassword}>Password
                        <input 
                        type="text" 
                        className={style.inputPassWord}
                        placeholder='Password'></input>
                    </label>
                </div>
                <button type="submit" className={style.submitButton}>submit</button>
            </form>
        </div>
    )
}

export default SignUp;