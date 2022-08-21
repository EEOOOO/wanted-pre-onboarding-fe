import React, { useState } from 'react';
import SignIn from '../sign_in/sign_in';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState(<SignIn/>);
    return (
        {viewableScreen}
    )
}

export default Login;