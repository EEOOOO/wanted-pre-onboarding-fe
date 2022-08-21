import React, { useState } from 'react';
import SignIn from '../sign_in/sign_in';
import SignUp from '../sign_up/sign_up';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState(<SignIn/>);

    return (
        <><h1>{viewableScreen}</h1><SignUp /></>
    )
}

export default Login;