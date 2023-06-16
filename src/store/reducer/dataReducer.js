const initialState = {
    isLoaded: false,
    collection: "",
    data: [],
    products: []
}


const GET_DATA = "GET_DATA";
const GET_PRODUCT = "GET_PRODUCT";
const GET_COLLECTION = "GET_COLLECTION";

const dataReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_COLLECTION: {
            return {
                ...state, collection: action.payload
            }
        }
        case GET_DATA:
            console.log(action.payload);
            return {
                ...state, 
                data: [...state.data, ...action.payload],
                isLoaded: true
            }
        case GET_PRODUCT:
            console.log(action.payload,1);
            return {
                ...state, 
                products: [...action.payload]
            }
        default:
            return state;
    }
}

export default dataReducer
