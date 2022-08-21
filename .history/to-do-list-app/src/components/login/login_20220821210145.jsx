import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState('signIn');
    return (
        <h1>{viewableScreen}</h1>
    )
}

export default Login;