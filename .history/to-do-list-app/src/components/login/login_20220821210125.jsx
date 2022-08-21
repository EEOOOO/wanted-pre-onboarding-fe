import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState('signIn');
    return (
        {viewableScreen}
    )
}

export default Login;