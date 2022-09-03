import {axios} from 'axios'

axios.defaults.baseURL = ' https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/';

export const signUp = async (email, password) => {
    try{
        const response = await axios.post('/auth/signup',{
            email:{email},
            password:{password}
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}