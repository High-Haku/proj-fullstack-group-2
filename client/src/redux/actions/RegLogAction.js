import axios from "axios";
export const POST_REGISTER = 'POST_REGISTER'
export const GET_USERS = 'GET_USERS'

export const postRegister = (data) => {
    return(dispatch) => {
        dispatch({
            type: POST_REGISTER,
            payload: {
                loading: true,
                data: false
            }
        })

        axios({
            method: "POST",
            url: "https://pitchpls.herokuapp.com/register",
            data: data
        })
        .then((response)=>{
            dispatch({
                type : POST_REGISTER,
                payload:{
                    loading: false,
                    data: response.data,
                    error: response.data.message
                }
            })
        })
        .catch((error)=>{
            dispatch({
                type: POST_REGISTER,
                payload: {
                    loading: false,
                    data: false,
                    error: false
                }
            })
        })
    }
}