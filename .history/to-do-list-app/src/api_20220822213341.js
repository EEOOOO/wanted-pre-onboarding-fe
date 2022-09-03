import {axios} from 'axios'

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