import { getDataAction, getProductAction } from "../store/action/dataAction"

import axios from 'axios';


export const fetchData = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('https://64892f7f5fa58521caaf4654.mockapi.io/Collection');
            dispatch(getDataAction(response.data));
        } catch (error) {
            // Handle error here
        }
    };
};
export const fetchProduct = (query) => {

    return async function (dispatch) {
        try {
            const response = await axios.get('https://64892f7f5fa58521caaf4654.mockapi.io/Data', { 
                params: { 
                    collection: query 
                } 
            });
            console.log(getProductAction);
            dispatch(getProductAction(response.data));
        } catch (error) {
            // Handle error here
        }
    };
};
