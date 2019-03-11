import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions";

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,
  register: null,
  registerError: null,
  username:null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null
      };
    case LOGIN_SUCCESS:
      return { ...state, login: action.payload, loginLoading: false };
    case LOGIN_FAIL:
      return { ...state, loginError: action.payload, loginLoading: false };
    case REGISTER:
      return {
        ...state,
        loginLoading: true,
        registerError: null
      };
    case REGISTER_SUCCESS:
      return { ...state, register: action.payload, loginLoading: false };
    case REGISTER_FAIL:
      return { ...state, registerError: action.payload, loginLoading: false };

    default:
      return state;
  }
};
