//getMessages method
import { domain, jsonHeaders, handleJsonResponse } from "./constants";

// action types
export const GET_MESSAGE = "GET_MESSAGE";
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS";
export const GET_MESSAGE_FAIL = "GET_MESSAGE_FAIL";

const url = domain + "/messages";
export const getMessages = () => dispatch => {
    dispatch({
        type: GET_MESSAGE
    });

    return fetch(url, {
        method: "GET",
        headers: jsonHeaders
    })
        .then(handleJsonResponse)
        .then(result => {
            return dispatch({
                type: GET_MESSAGE_SUCCESS,
                payload: result
            });
        })
        .catch(err => {
            return Promise.reject(
                dispatch({ type: GET_MESSAGE_FAIL, payload: err.message })
            );
        });
};

export default getMessages