const initialState = {
    isLoaded: false,
    isLogin: false,
    collection: "",
    typeRent: "Day",
    typeDelivery: "Address",
    timeRent: {},
    data: [],
    products: []
}


const GET_DATA = "GET_DATA";
const GET_PRODUCT = "GET_PRODUCT";
const GET_COLLECTION = "GET_COLLECTION";
const GET_RENT = "GET_RENT";
const GET_DELIVERY = "GET_DELIVERY";
const GET_TIME = "GET_TIME";

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIME: {
            return {
                ...state, timeRent: action.payload
            }
        }
        case GET_DELIVERY: {
            return {
                ...state, typeDelivery: action.payload
            }
        }
        case GET_RENT: {
            return {
                ...state, typeRent: action.payload
            }
        }
        case GET_COLLECTION: {
            return {
                ...state, collection: action.payload
            }
        }
        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                isLoaded: true
            }
        case GET_PRODUCT:
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state;
    }
}

export default dataReducer
