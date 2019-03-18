import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import {getMessages} from "./getMessages.js";

export const ADD_LIKE = "ADD_LIKE";
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS";
export const ADD_LIKE_FAIL = "ADD_LIKE_FAIL";
const url = domain + "/likes";

export const toggleAddLike = messageId => (dispatch, getState) => {
    console.log("toggle")
    const userId = getState().auth.login.id;
     const message = getState().messages.messages.find(message => message.id === messageId);
    const like = message.likes.find(like => like.userId === userId);
    console.log(like)
    if(!like){
        dispatch(addLike(messageId)).then(() => {
            dispatch(getMessages);
        });
    }
};

export const addLike = messageId => (dispatch, getState) => {
    const token = getState().auth.login.token;
    dispatch({ type: ADD_LIKE });
    return fetch(url, {
      method: "POST",
      headers: {
        ...jsonHeaders,
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({ 'messageId': messageId })
    })
      .then(handleJsonResponse)
      .then(result => {
        return dispatch({
          type: ADD_LIKE_SUCCESS,
          payload: result
        });
      })
      .catch(err => {
        return Promise.reject(
          dispatch({ type: ADD_LIKE_FAIL, payload: err.message })
        );
      });   
};

export default addLike
