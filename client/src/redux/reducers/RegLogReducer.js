import { POST_REGISTER } from "../actions/RegLogAction";

const initialState = {
    postRegisterResult: false,
    postRegisterLoading: false,
    postRegisterError: false
}

const accountSys = (state = initialState, action) => {
    switch(action.type){
        case POST_REGISTER:
            return{
                ...state,
                postRegisterResult: action.payload.data,
                postRegisterLoading: action.payload.loading,
                postRegisterError: action.payload.error
            }
        // case POST_LOGIN:
        //     return{
        //         ...state,
        //         postLoginResult: action.payload.data,
        //         postLoginLoading: action.payload.loading
        //     }
            default:
                return state
    }
}

// const validasi = (state = initialState, action)=>{
//     switch(action.type){
//         case GET_USERS:
//             return{
//                 ...state,
//                 getUsersResult: action.payload.data,
//                 getUsersLoading: action.payload.loading
//             }
//             default:
//                 return state
//     }
// }

export default accountSys