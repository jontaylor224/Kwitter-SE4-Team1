import {
  GET_MESSAGE,
  GET_MESSAGE_FAIL,
  GET_MESSAGE_SUCCESS,
  CREATE_MESSAGE,
  CREATE_MESSAGE_FAIL,
  CREATE_MESSAGE_SUCCESS
} from "../actions";

const initialState = {
  getMessageLoading: false,
  getMessageError: null,
  createMessageLoading: false,
  createMessageError: null,
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        getMessageLoading: true,
        getMessageError: null
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        getMessageLoading: false
      };
    case GET_MESSAGE_FAIL:
      return {
        ...state,
        getMessageError: action.payload,
        getMessageLoading: false
      };

    case CREATE_MESSAGE:
      return {
        ...state,
        createMessageLoading: true,
        createMessageError: null
      };
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [action.payload.message, ...state.messages],
        createMessageLoading: false
      };
    case CREATE_MESSAGE_FAIL:
      return {
        ...state,
        createMessageError: action.payload,
        createMessageLoading: false
      };

    default:
      return state;
  }
};
