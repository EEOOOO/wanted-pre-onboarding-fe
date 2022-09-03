import axios from 'axios'

const instance = axios.create({
    "baseURL": 'https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production'
});

export const signUp = async (email, password) => {
    let data = JSON.stringify({
        "email": "ddn@gmail.com",
        "password": "12345678"
      });
    try{
        const response = await instance.post('/auth/signup',data,{
            headers:{
                'Content-Type':'applicaiton/json'
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error.response.data)
    }
}

export const signIn = async (email, password) => {
    try{
        const response = await axios.post('/auth/signin',
        {
            email:{email},
            password:{password}
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
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