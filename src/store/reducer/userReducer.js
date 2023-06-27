import axios from 'axios';

const initialState = {
    isLogin: false,
    users: {},
    user: {}
}

const CHECK_LOGIN = "CHECK_LOGIN";
const CREATE_USER = "CREATE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";
const CHECK_LOCAL = "CHECK_LOCAL";


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case CHECK_LOGIN: {
            const { phone, password } = action.payload;
            const filteredUsers = state.users.filter(user => user.number_phone === phone && user.number_password === password);
            localStorage.setItem("user", JSON.stringify(filteredUsers));
            return {
                ...state, user: filteredUsers
            }
        }
        case CHECK_LOCAL: {
            let localLogin = JSON.parse(localStorage.getItem("user")) || false;
            let login = false;
            if (localLogin) {
                const { phone, password } = localLogin;
                login = state.users.some(user => user.number_phone === phone && user.number_password === password);
            }
            return {
                ...state, isLogin: login
            }
        }

        case CREATE_USER:
            console.log(action.payload);
            axios.post("https://64892f7f5fa58521caaf4654.mockapi.io/User", action.payload);
            return state

        default:
            return state
    }
}

export default userReducer