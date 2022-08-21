import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState(<Login/>)
    return (
        {viewableScreen}
    )
}

export default Login;