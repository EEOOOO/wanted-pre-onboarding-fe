import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState(<Login/>)
    return (
        <h1> Login Component </h1>
    )
}

export default Login;