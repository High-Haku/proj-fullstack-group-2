import axios from "axios";
// export const POST_LOGIN = 'POST_LOGIN'
export const POST_REGISTER = 'POST_REGISTER'
export const GET_USERS = 'GET_USERS'

// export const getUsers = () => async (dispatch) => {
//     try {
//         const { data } = await api.getAllContents();
//         // console.log(data)
//         dispatch({ type: GET_USERS, payload: data })
//       } catch (error) {
//         console.log(error.message);
//       }

// }

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
            url: "http://localhost:5000/register",
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

// export const postLogin = (data) => {
//     return(dispatch) => {
//         dispatch({
//             type: POST_LOGIN,
//             payload:{
//                 loading: true,
//                 data: false
//             }
//         })
//         axios({
//             method: "POST",
//             url: "http://localhost:5000/login",
//             data: data
//         })
//         .then((response)=>{
//             dispatch({
//                 type : POST_LOGIN,
//                 payload:{
//                     loading: false,
//                     data: response.data
//                 }
//             })
//         })
//         .catch((error)=>{
//             dispatch({
//                 type: POST_REGISTER,
//                 payload: {
//                     loading: false,
//                     data: false,
//                     error
//                 }
//             })
//         })
//     }
// }