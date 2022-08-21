import React, { useState } from 'react';
import SignIn from '../sign_in/sign_in';
import SignUp from '../sign_up/sign_up';
import style from '../login/login.module.css';
import loginImage from '../login/login_img.png';

const Login = (props) => {
    const goTosignUp = () => {
        setViewableScreen(<SignUp img={img}/>)
    }
    const signIn = <SignIn img={img} goToSignUp={goTosignUp}/>
    let [viewableScreen, setViewableScreen] = useState(signIn);
    return (
        <div className={style.login}>
        {viewableScreen}
        <image src={loginImage}></image>
        </div>
    )
}

export default Login;