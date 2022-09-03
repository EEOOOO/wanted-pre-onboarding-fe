import axios from 'axios'

export const signUp = (email, password) => {
    let axios = require('axios');
    let data = JSON.stringify({
    "email": `${email}`,
    "password": `${password}`
    });

    let config = {
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
    let axios = require('axios');
    let data = JSON.stringify({
    "email": `${email}`,
    "password": `${password}`
    });

    let config = {
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

export const createTodo = async (todoItem, access_token) => {
    
    let config = {
    method: 'post',
    url: 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
    headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${access_token}`
    },
    data : `${todoItem}`
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const getTodos = async (access_token) => {
    let axios = require('axios');
    let data = '';

    let config = {
    method: 'get',
    url: 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos',
    headers: { 
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

export const updateTodos = async(id, todoItem, isCompleted) => {
    let axios = require('axios');
    var data = JSON.stringify({
    "todo": todoItem,
    "isCompleted": isCompleted
    });

    var config = {
    method: 'get',
    url: `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/todos/:${id}`,
    headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF3ZUBnbWFpbC5jb20iLCJzdWIiOjI1MDAsImlhdCI6MTY2MTE4MTU5MSwiZXhwIjoxNjYxNzg2MzkxfQ.v6eZXFnvATaotm3-WqSY7AItpTfZ2hKMKeU0bULHDqM', 
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
