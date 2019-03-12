import { push } from "connected-react-router";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const GET_ANY_USER = "GET_ANY_USER";
export const GET_ANY_USER_SUCCESS = "GET_ANY_USER_SUCCESS";
export const GET_ANY_USER_FAILURE = "GET_ANY_USER_FAILURE";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

const kwitterURL = "https://kwitter-api.herokuapp.com";

export const getUserInfo = userId => dispatch => {
    dispatch({ type: GET_USER });
    fetch(`${kwitterURL}/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: GET_USER_SUCCESS, data: data.user });
      })
      .catch(err => {
        dispatch({ type: GET_USER_FAILURE, err });
      });
  };

  export const deleteUser = token => dispatch => {
    dispatch({ type: DELETE_USER });
    fetch(`${kwitterURL}/users`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch({ type: DELETE_USER_SUCCESS });
        dispatch(push("/register"));
      })
      .catch(err => {
        dispatch({ type: DELETE_USER_FAILURE, err });
      });
  };
  
  export const updateUser = userData => (dispatch, getState) => {
    const token = getState().authentication.token;
    if (userData.displayName === "") {
      delete userData.displayName;
    }
    if (userData.password === "") {
      delete userData.password;
    }
    dispatch({ type: UPDATE_USER });
    fetch(`${kwitterURL}/users`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: UPDATE_USER_SUCCESS, data: data.user });
        dispatch(push("/profile"));
      })
      .catch(err => {
        dispatch({ type: UPDATE_USER_FAILURE, err });
      });
  };
  
  export const getAnyUser = userId => dispatch => {
    dispatch({ type: GET_ANY_USER });
    fetch(`${kwitterURL}/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: GET_ANY_USER_SUCCESS, data: data.user });
      })
      .catch(err => {
        dispatch({ type: GET_ANY_USER_FAILURE, err });
      });
  };
  