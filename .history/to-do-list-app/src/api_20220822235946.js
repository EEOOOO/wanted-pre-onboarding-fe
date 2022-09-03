import axios from 'axios'

const instance = axios.create({
    baseURL: "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/",
});
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
export const signIn = async (email, password) => {
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
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const createTodo = async (todo) => {
    try{
        const response = await axios.post('/todos',
        {
            todo:{todo}
        },{
            headers:{
                'Authorization':'Bearer access_token',
                'Content-Type':'application/json'
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
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