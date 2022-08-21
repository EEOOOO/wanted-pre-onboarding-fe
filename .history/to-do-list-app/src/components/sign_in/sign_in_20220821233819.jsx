import React from 'react';
import style from '../sign_in/sign_in.module.css'

const SignIn = ({ goToSignUp}) => {
    const handleSubmit = (event) => {
        //event.preventDefault();
        console.log(event);
    }
    return(
        <div className={style.signIn}>
            <h1>Sign in</h1>
            <form className={style.siginForm} onSubmit={handleSubmit}>
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
            <button className={style.signUp} onClick={goToSignUp}>Sign Up</button>
        </div>
    )
}

export default SignIn;