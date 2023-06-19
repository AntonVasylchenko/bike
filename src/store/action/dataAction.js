const GET_DATA = "GET_DATA";
const GET_PRODUCT = "GET_PRODUCT";
const GET_COLLECTION = "GET_COLLECTION";



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
