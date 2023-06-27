import axios from 'axios';
import { getAllUsersAction, getCheckLoginAction, getCreateUserAction } from '../store/action/userAction';

export const allUserFetch = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('https://64892f7f5fa58521caaf4654.mockapi.io/User');
            dispatch(getAllUsersAction(response.data));
        } catch (error) {
        }
    };
};

export const userFetch = (obj) => {
    return async function (dispatch) {
        try {
            await dispatch(getCreateUserAction(obj));
        } catch (error) {
        }
    };
};

