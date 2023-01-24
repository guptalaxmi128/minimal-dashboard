import { LOGIN, REGISTER, LOGOUT } from "../../constants/actionTypes";
import * as api from '../../api/index'


export const register = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);
        dispatch({ type: REGISTER, payload: data });
        history('/');
    } catch (error) {
        console.log(error);
    }
};

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formData);
        dispatch({ type: LOGIN, payload: data });
        history('/')
    } catch (error) {
        console.log(error);
    }
}

export const logout = (history) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT});
        history('/');
    } catch (error) {
        console.log(error);
    }
}