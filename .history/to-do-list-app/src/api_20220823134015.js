import axios from 'axios'

export const signUp = (email, password) => {
    var axios = require('axios');
    var data = JSON.stringify({
    "email": `${email}`,
    "password": `${password}`
    });

    var config = {
    method: 'post',
    url: 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}
export const signIn = async (email, password, gotoTodo) => {
    var axios = require('axios');
    var data = JSON.stringify({
    "email": `${email}`,
    "password": `${password}`
    });

    var config = {
    method: 'post',
    url: 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signin',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
        localStorage.setItem(email, response.data.access_token);
        gotoTodo();
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const createTodo = async (todo, access_token) => {
    let data = JSON.stringify({
    "todo": todo
    });

    let config = {
    method: 'post',
    url: 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${access_token}`
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const getTodos = async (todo) => {
    try{
        const response = await axios.get('/todos',
        {
            todo:{todo}
        },{
            headers:{
                'Authorization':'Bearer access_token'
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}