import React, { useState } from 'react';
import SignIn from '../sign_in/sign_in';
import SignUp from '../sign_up/sign_up';

const Login = (props) => {
    const img = '';
    const goTosignUp = () => {
        setViewableScreen(<SignUp img={img}/>)
    }
    const signIn = <SignIn img={img} goToSignUp={goTosignUp}/>
    let [viewableScreen, setViewableScreen] = useState(signIn);
    return (
        <>
        {viewableScreen}
        </>
    )
}

export default Login;