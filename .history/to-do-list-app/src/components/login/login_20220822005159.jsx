import React, { useState } from 'react';
import SignIn from '../sign_in/sign_in';
import SignUp from '../sign_up/sign_up';
import style from '../login/login.module.css';
import loginImage from '../login/login_img.png';

const Login = (props) => {
    const goTosignUp = () => {
        setViewableScreen(<SignUp/>)
    }
    const signIn = <SignIn goToSignUp={goTosignUp}/>
    let [viewableScreen, setViewableScreen] = useState(signIn);
    return (
        <div className={style.login}>
            <div className={style.cover}>
                <img src={loginImage} className={style.coverImage}/>
            </div>
            <div className={style.inputContainer}>{viewableScreen}</div>
        </div>
    )
}

export default Login;