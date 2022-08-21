import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState('login');
    return (
        {viewableScreen}
    )
}

export default Login;