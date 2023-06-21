const GET_DATA = "GET_DATA";
const GET_PRODUCT = "GET_PRODUCT";
const GET_COLLECTION = "GET_COLLECTION";
const GET_RENT = "GET_RENT";
const GET_DELIVERY = "GET_DELIVERY";
const GET_TIME = "GET_TIME";


export const getTimeAction = (payload) => ({
    type: GET_TIME,
    payload: payload
})
export const getRentAction = (payload) => ({
    type: GET_RENT,
    payload: payload
})
export const getDeliveryAction = (payload) => ({
    type: GET_DELIVERY,
    payload: payload
})

export const getCollectionAction = (payload) => ({
    type: GET_COLLECTION,
    payload: payload
})
export const getDataAction = (payload) => ({
    type: GET_DATA,
    payload: payload
})
export const getProductAction = (payload) => ({
    type: GET_PRODUCT,
    payload: payload
})
