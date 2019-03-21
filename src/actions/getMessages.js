//getMessages method
import { domain, jsonHeaders, handleJsonResponse } from "./constants"

// action types
export const GET_MESSAGE = "GET_MESSAGE"
export const GET_MESSAGE_SUCCESS = "GET_MESSAGE_SUCCESS"
export const GET_MESSAGE_FAIL = "GET_MESSAGE_FAIL"
export const END_OF_MESSAGES = "END_OF_MESSAGES"

const url = domain + "/messages"
export const getMessages = (limit = 20, offset = 0) => dispatch => {
    dispatch({
        type: GET_MESSAGE
    })

    return fetch(url + `?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: jsonHeaders
    })
        .then(handleJsonResponse)
        .then(result => {
            if (result.messages.length === 0) {
                return dispatch({
                    type: END_OF_MESSAGES
                })
            } else {
                return dispatch({
                    type: GET_MESSAGE_SUCCESS,
                    payload: result
                })
            }
        })
        .catch(err => {
            return Promise.reject(
                dispatch({ type: GET_MESSAGE_FAIL, payload: err.message })
            )
        })
}

export default getMessages
