import React, { useState } from 'react';

const Login = (props) => {
    let [viewableScreen, setViewableScreen] = useState('signin');
    return (
        {viewableScreen}
    )
}

export default Login;