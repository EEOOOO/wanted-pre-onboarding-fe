import React, { useState, useEffect } from 'react';
import SignIn from '../sign_in/sign_in';
import SignUp from '../sign_up/sign_up';
import style from '../login/login.module.css';
import loginImage from '../login/login_img.png';
import { useNavigate } from 'react-router-dom';

const Login = ({userToken, setUserToken}) => {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.key(userToken)){
          navigate("/todo")
        }
      }, []); 
    console.log('login',userToken);
    console.log('todo',localStorage);
    
    const checkEmailValid = async (emailInput) => {
        if(emailInput.includes('@')){
            const atIndex = emailInput.indexOf('@');
            const id = emailInput.substr(0, atIndex);
            const domain = emailInput.substr(atIndex+1);
            const allowList = ['.org', '.com', '.net']
            if (id !== '' && allowList.includes(domain.substr(-4))){
                return true
            } else{
                return false
            }
        } else {
            return false
        } 
    }
    const checkPasswordValid = async(passwordInput) => {
        if (passwordInput.length >= 8){
            return true
            } else {
                return false
            } 
    }
    
    const goTosignUp = () => {
        setViewableScreen(<SignUp 
                            checkEmailValid={checkEmailValid} 
                            checkPasswordValid={checkPasswordValid}
                            setViewableScreen={setViewableScreen}
                            signIn={<SignIn 
                    checkEmailValid={checkEmailValid} 
                    goToSignUp={goTosignUp}
                    checkPasswordValid={checkPasswordValid}
                    setUserToken={setUserToken}
                    />}
                            />)
    }
    const signIn = <SignIn 
                    checkEmailValid={checkEmailValid} 
                    goToSignUp={goTosignUp}
                    checkPasswordValid={checkPasswordValid}
                    setUserToken={setUserToken}
                    />
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