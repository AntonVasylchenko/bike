import axios from 'axios';

const initialState = {
    isLogin: false,
    users: {},
    user: {},
    items: []
}

const CHECK_LOGIN = "CHECK_LOGIN";
const CREATE_USER = "CREATE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";
const CHECK_LOCAL = "CHECK_LOCAL";
const USER_TO_CART = "USER_TO_CART";


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
                const { number_phone:phone, number_password:password } = localLogin[0];
                login = state.users.some(user => user.number_phone === phone && user.number_password === password);
                return {
                    ...state, 
                        isLogin: login,
                        user: localLogin
                }
            }
            return {
                ...state, isLogin: login
            }
        }

        case CREATE_USER:
            axios.post("https://64892f7f5fa58521caaf4654.mockapi.io/User", action.payload);
            return state
        case USER_TO_CART: 
            const items = {items:action.payload[1]};
            const localLogin = JSON.parse(localStorage.getItem("user"));
            const newLocal = [{...localLogin[0],items:action.payload[1]}];
            localStorage.setItem("user", JSON.stringify(newLocal));
            localStorage.setItem("userCart", JSON.stringify(items));
            axios.put(`https://64892f7f5fa58521caaf4654.mockapi.io/User/${action.payload[0]}`, items);
            return state

        default:
            return state
    }
}

export default userReducer