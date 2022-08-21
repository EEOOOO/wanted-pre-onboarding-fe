import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState(<Login/>)
    return (
        <h1> {viewableScreen} </h1>
    )
}

export default Login;