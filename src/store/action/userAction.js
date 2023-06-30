const CHECK_LOGIN = "CHECK_LOGIN";
const CREATE_USER = "CREATE_USER";
const GET_ALL_USERS = "GET_ALL_USERS";
const CHECK_LOCAL = "CHECK_LOCAL";
const USER_TO_CART = "USER_TO_CART";

export const getCheckLocalAction = (payload) => ({
    type: CHECK_LOCAL,
    payload: payload
})
export const setUserToCartAction= (payload) => ({
    type: USER_TO_CART,
    payload: payload
})
export const getCheckLoginAction = (payload) => ({
    type: CHECK_LOGIN,
    payload: payload
})
export const getAllUsersAction = (payload) => ({
    type: GET_ALL_USERS,
    payload: payload
})
export const getCreateUserAction = (payload) => ({
    type: CREATE_USER,
    payload: payload
})